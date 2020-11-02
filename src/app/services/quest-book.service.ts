import { Injectable } from '@angular/core';
import { QuestItem } from '../models/quest.model';
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

  constructor(private shared: SharedDataService) {
    this.quests = {}
    this.all = QuestBookService._quests.map(q => q);
    QuestBookService._quests.forEach(q => this.quests[q.name] = q);
  }

  prepareQuests() {
  }

  checkQuests() {
    this.shared.quests.active.forEach(q => this.quests[q].check(this.shared));
  }

}
