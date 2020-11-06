import { Injectable } from '@angular/core';
import { HeroReward, HeroRewardExp, HeroRewardItem } from '../models/hero.model';
import { QuestItem } from '../models/quest.model';
import { ItemsLoreService } from './items-lore.service';
import { SharedDataService } from './shared-data.service';

@Injectable({
  providedIn: 'root'
})
export class QuestBookService {

  static _quests: QuestItem[] = [];
  static registerQuest(quest: QuestItem) {
    this._quests.push(quest);
  }

  quests: {[id:string]: QuestItem};
  all: QuestItem[];

  rewardTypes : {[code:string]: (name: string) => HeroReward} = {
    'item': (name) => {
      return new HeroRewardItem(this.items.items[name.split(':')[1]]);
    },
    'exp': (name) => {
      return new HeroRewardExp(parseInt(name.split(':')[1]));
    },
  };

  constructor(
    private shared: SharedDataService,
    private items: ItemsLoreService,
    ) {
    this.quests = {}
    this.all = QuestBookService._quests.map(q => q);
    QuestBookService._quests.forEach(q => this.quests[q.name] = q);
  }

  prepareQuests() {
  }

  trigger(hook: string) {
    this.all
    .filter(q => q.hook === hook)
    .filter(q => !this.shared.quests.active.includes(q.name) && !this.shared.quests.done.includes(q.name) && q.trigger(this.shared))
    .forEach(q => {
      this.shared.quests.active.push(q.name);
      this.shared.save();
    });
  }

  checkQuests() {
    this.shared.quests
    .active
    .map(q => this.quests[q])
    .filter(q => q.check(this.shared))
    .forEach(q => this.markDone(q))
    ;
  }

  markDone(quest: QuestItem) {
    this.shared.quests.active.splice(this.shared.quests.done.indexOf(quest.name), 1);
    this.shared.quests.done.push(quest.name);
    this.shared.save();
  }

  reward(quest: QuestItem) {
    this.shared.quests.done.splice(this.shared.quests.done.indexOf(quest.name), 1);
    this.shared.reward(
      ...quest
      .rewards
      .map(r => this.rewardTypes[r.split(':')[0]](r))
    );
    this.shared.quests.rewarded.push(quest.name);
    this.shared.save();
  }

}
