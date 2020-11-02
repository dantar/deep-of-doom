import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { QuestItem } from 'src/app/models/quest.model';
import { AudioPlayService } from 'src/app/services/audio-play.service';
import { QuestBookService } from 'src/app/services/quest-book.service';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: '[app-menu-village-chief]',
  templateUrl: './menu-village-chief.component.html',
  styleUrls: ['./menu-village-chief.component.scss']
})
export class MenuVillageChiefComponent implements OnInit {

  @Output() closeDialog = new EventEmitter<string>();

  quests: AboutQuest[];
  details: string;
  effects: {[id:string]: () => void};

  constructor(
    private audio: AudioPlayService,
    private questbook: QuestBookService,
    private shared: SharedDataService,
  ) { }

  ngOnInit(): void {
    this.details = null;
    this.quests = this.questbook.all
    .filter(q => q.hook === 'village-chief')
    .map(q => new AboutQuest(q, this.shared.quests.active.includes(q.name), this.shared.quests.done.includes(q.name)))
    .filter(a => a.active || a.done || a.quest.trigger(this.shared));
    this.quests
    .filter(a => !a.active && !a.done)
    .forEach(a => {
      this.shared.quests.active.push(a.quest.name);
      this.shared.save();
    });
    this.effects = {
      'exp5': () => {
        this.shared.exp(5);
      },
    };
  }

  clickQuest(quest: AboutQuest) {
    this.audio.play('action');
    if (this.details === quest.quest.name) {
      this.details = null;
    } else {
      this.details = quest.quest.name;
    }
    if (quest.done) {
      quest.active = false;
      quest.done = false;
      this.shared.quests.done.splice(this.shared.quests.done.indexOf(quest.quest.name), 1);
      quest.quest.rewards.forEach(r => this.effects[r]());
      this.shared.quests.rewarded.push(quest.quest.name);
      this.shared.save();
      this.ngOnInit();
    }
  }

  clickClose() {
    this.audio.play('action');
    this.closeDialog.emit('close');
  }

}

class AboutQuest {
  quest: QuestItem;
  done: boolean;
  active: boolean;

  constructor(quest: QuestItem, active: boolean, done: boolean) {
    this.quest = quest;
    this.done = done;
    this.active = active;
  }
}