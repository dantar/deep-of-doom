import { Component, Input, OnInit } from '@angular/core';
import { FightAction } from 'src/app/models/fight.model';
import { FightActionsService } from 'src/app/services/fight-actions.service';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: '[app-fight-protect-poison]',
  templateUrl: './fight-protect-poison.component.html',
  styleUrls: ['./fight-protect-poison.component.scss']
})
export class FightProtectPoisonComponent implements OnInit {

  @Input() action: FightAction;

  constructor() { }

  ngOnInit(): void {
  }

}

FightActionsService.registerItem({
  name: 'protectPoison1',
  description: ['Se attivata, annulla il prossimo effetto veleno 1'],
  effect: (shared: SharedDataService) => {
    shared.fight.tags.push('preventPoison1');
  },
  value: 1,
});

FightActionsService.registerItem({
  name: 'protectPoison2',
  description: ['Se attivata, annulla il prossimo effetto veleno 1 o 2'],
  effect: (shared: SharedDataService) => {
    shared.fight.tags.push('preventPoison2');
  },
  value: 2,
});
