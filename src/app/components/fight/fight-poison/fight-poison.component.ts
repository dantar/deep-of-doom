import { Component, Input, OnInit } from '@angular/core';
import { FightAction } from 'src/app/models/fight.model';
import { FightActionsService } from 'src/app/services/fight-actions.service';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: '[app-fight-poison]',
  templateUrl: './fight-poison.component.html',
  styleUrls: ['./fight-poison.component.scss']
})
export class FightPoisonComponent implements OnInit {

  @Input() action: FightAction;

  constructor() { }

  ngOnInit(): void {
  }

}

FightActionsService.registerItem({
  name: 'poison',
  description: ['Se attivata, perdi tanta vita quanto veleno hai, e il veleno cresce di 1'],
  effect: (shared: SharedDataService) => {
    const tag: string = shared.popFightTag('preventPoison1', 'preventPoison2');
    switch (tag) {
      case 'preventPoison1':
      case 'preventPoison2':
        break;
      default:
        shared.poison(1);
        break;
    }
  },
  value: 1,
});

FightActionsService.registerItem({
  name: 'poison2',
  description: ['Se attivata, perdi tanta vita quanto veleno hai, e il veleno cresce di 2'],
  effect: (shared: SharedDataService) => {
    shared.poison(2);
  },
  value: 2,
});
