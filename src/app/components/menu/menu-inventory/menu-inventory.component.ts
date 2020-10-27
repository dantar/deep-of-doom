import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AudioPlayService } from 'src/app/services/audio-play.service';

@Component({
  selector: '[app-menu-inventory]',
  templateUrl: './menu-inventory.component.html',
  styleUrls: ['./menu-inventory.component.scss']
})
export class MenuInventoryComponent implements OnInit {

  @Output() closeDialog = new EventEmitter<string>();
  @Output() activateItem = new EventEmitter<string>();

  constructor(private audio: AudioPlayService) { }

  ngOnInit(): void {
  }

  clickClose() {
    this.audio.play('action');
    this.closeDialog.emit('close');
  }

  clickFlee() {
    this.audio.play('action');
    this.activateItem.emit('flee');
  }

}
