import { Component, Input, OnInit } from '@angular/core';
import { FightAction } from 'src/app/models/fight.model';
import { FightActionsService } from 'src/app/services/fight-actions.service';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: '[app-fight-life-lose]',
  templateUrl: './fight-life-lose.component.html',
  styleUrls: ['./fight-life-lose.component.scss']
})
export class FightLifeLoseComponent implements OnInit {

  @Input() action: FightActionLife;

  constructor() { }

  ngOnInit(): void {
  }

}

class FightActionLife extends FightAction {
  value: number;
}

FightActionsService.registerItem({
  name: 'hit',
  description: ['Se attivata, perdi 1 vita.'],
  effect: (shared: SharedDataService) => {
    shared.life(-1);
  },
  value: -1,
} as FightActionLife);

FightActionsService.registerItem({
  name: 'hit2',
  description: ['Se attivata, perdi 2 vite.'],
  effect: (shared: SharedDataService) => {
    shared.life(-2);
  },
  value: -2,
} as FightActionLife);
