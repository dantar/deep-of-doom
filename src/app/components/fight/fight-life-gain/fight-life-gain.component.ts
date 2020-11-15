import { Component, Input, OnInit } from '@angular/core';
import { FightAction } from 'src/app/models/fight.model';
import { FightActionsService } from 'src/app/services/fight-actions.service';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: '[app-fight-life-gain]',
  templateUrl: './fight-life-gain.component.html',
  styleUrls: ['./fight-life-gain.component.scss']
})
export class FightLifeGainComponent implements OnInit {

  @Input() action: FightAction;

  constructor() { }

  ngOnInit(): void {
  }

}

FightActionsService.registerItem({
  name: 'life1',
  description: ['Se attivata, recuperi 1 vita.'],
  effect: (shared: SharedDataService) => {
    shared.life(1);
  },
  value: 1,
});

FightActionsService.registerItem({
  name: 'life2',
  description: ['Se attivata, recuperi 2 vite.'],
  effect: (shared: SharedDataService) => {
    shared.life(2);
  },
  value: 2,
});
