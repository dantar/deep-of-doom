import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { QuestItem } from 'src/app/models/quest.model';
import { AudioPlayService } from 'src/app/services/audio-play.service';

@Component({
  selector: '[app-menu-village-chief]',
  templateUrl: './menu-village-chief.component.html',
  styleUrls: ['./menu-village-chief.component.scss']
})
export class MenuVillageChiefComponent implements OnInit {

  @Output() closeDialog = new EventEmitter<string>();

  quests: QuestItem[];

  constructor(
    private audio: AudioPlayService,
  ) { }

  ngOnInit(): void {
    this.quests = [];
  }

  clickQuest(quest: QuestItem) {
    this.audio.play('action');
    console.log(quest);
  }

  clickClose() {
    this.audio.play('action');
    this.closeDialog.emit('close');
  }

}