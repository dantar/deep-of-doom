import { Component, Input, OnInit } from '@angular/core';
import { HeroReward, HeroRewardExp, HeroRewardItem } from 'src/app/models/hero.model';

@Component({
  selector: '[app-popup-reward]',
  templateUrl: './popup-reward.component.html',
  styleUrls: ['./popup-reward.component.scss']
})
export class PopupRewardComponent implements OnInit {

  @Input() reward: HeroReward;

  constructor() { }

  ngOnInit(): void {
  }

  rewardAsItem(): HeroRewardItem {
    return this.reward as HeroRewardItem;
  }
  rewardAsExp(): HeroRewardExp {
    return this.reward as HeroRewardExp;
  }

}
