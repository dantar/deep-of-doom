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

  quests: QuestItem[];
  details: string;

  constructor(
    public shared: SharedDataService,
    private audio: AudioPlayService,
    private questbook: QuestBookService,
  ) { }

  ngOnInit(): void {
    this.details = null;
    this.questbook.trigger('village-chief');
    this.quests = this.shared.quests.active
    .concat(this.shared.quests.done)
    .map(q => this.questbook.quests[q])
    .filter(q => q.hook = 'village-chief')
    ;
  }

  clickQuest(quest: QuestItem) {
    this.audio.play('action');
    if (this.details === quest.name) {
      this.details = null;
    } else {
      this.details = quest.name;
    }
  }
  
  clickDone(quest: QuestItem) {
    this.audio.play('action');
    this.questbook.reward(quest);
    this.ngOnInit();
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