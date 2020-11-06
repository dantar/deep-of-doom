import { Component, OnInit } from '@angular/core';
import { HeroItem, HeroReward, HeroRewardExp, HeroRewardItem } from 'src/app/models/hero.model';
import { AudioPlayService } from 'src/app/services/audio-play.service';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-game-play',
  templateUrl: './game-play.component.html',
  styleUrls: ['./game-play.component.scss']
})
export class GamePlayComponent implements OnInit {

  constructor(
    public shared: SharedDataService,
    private audio: AudioPlayService,
  ) { }

  ngOnInit(): void {
  }

  clickReward(reward: HeroReward) {
    this.audio.play('action');
    reward.ok(this.shared); 
    this.shared.rewards.splice(0, 1);
    this.shared.save();
  }

}
