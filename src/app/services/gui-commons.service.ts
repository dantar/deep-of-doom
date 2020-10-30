import { Injectable } from '@angular/core';
import { AudioPlayService } from './audio-play.service';

@Injectable({
  providedIn: 'root'
})
export class GuiCommonsService {

  constructor(private audio: AudioPlayService) { }

  clickDisabled() {
    this.audio.play('action');
  } 

  act(action: ()=>void) {
    this.audio.play('action');
    action();
  }
  
}
