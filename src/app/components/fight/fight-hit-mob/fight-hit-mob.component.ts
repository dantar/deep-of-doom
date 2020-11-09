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

  @Input() action: FightActionFight;
  @Input() value: number;

  constructor() {
  }

  ngOnInit(): void {
    if (this.action) this.value = this.action.value;
  }

}

class FightActionFight extends FightAction {
  value: number
}

FightActionsService.registerItem({
  name: 'fight',
  description: ['Se scatta questa azione, l\'avversario subisce un colpo e perde 1 vita.'],
  effect: (shared: SharedDataService) => {
    shared.fight.life = Math.max(0, shared.fight.life - 1);
  },
  value: 1,
} as FightActionFight);

FightActionsService.registerItem({
  name: 'fight2',
  description: ['Se scatta questa azione, l\'avversario subisce un colpo e perde 2 vite.'],
  effect: (shared: SharedDataService) => {
    shared.fight.life = Math.max(0, shared.fight.life - 2);
  },
  value: 2,
} as FightActionFight);