import { Component, Input, OnInit } from '@angular/core';
import { FightAction } from 'src/app/models/fight.model';
import { FightActionsService } from 'src/app/services/fight-actions.service';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: '[app-fight-hit-mob]',
  templateUrl: './fight-hit-mob.component.html',
  styleUrls: ['./fight-hit-mob.component.scss']
})
export class FightHitMobComponent implements OnInit {

  @Input() action: FightAction;

  constructor() {
  }

  ngOnInit(): void {
  }

}

FightActionsService.registerItem({
  name: 'fight',
  description: ['Se attivata, l\'avversario subisce un colpo e perde 1 vita.'],
  effect: (shared: SharedDataService) => {
    shared.adjustMobLife(-1);
  },
  value: 1,
});

FightActionsService.registerItem({
  name: 'fight2',
  description: ['Se attivata, l\'avversario subisce un colpo e perde 2 vite.'],
  effect: (shared: SharedDataService) => {
    shared.adjustMobLife(-2);
  },
  value: 2,
});