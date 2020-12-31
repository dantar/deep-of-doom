import { Component, Input, OnInit } from '@angular/core';
import { FightAction } from 'src/app/models/fight.model';
import { FightActionsService } from 'src/app/services/fight-actions.service';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: '[app-fight-mana-gain]',
  templateUrl: './fight-mana-gain.component.html',
  styleUrls: ['./fight-mana-gain.component.scss']
})
export class FightManaGainComponent implements OnInit {

  @Input() action: FightAction;

  constructor() { }

  ngOnInit(): void {
  }

}

FightActionsService.registerItem({
  name: 'mana1',
  description: ['Se attivata, recuperi 1 mana.'],
  effect: (shared: SharedDataService) => {
    shared.tagsPreventFightEffect((shared)=>{
      shared.mana(1);
    }, 'freeze');
  },
  value: 1,
});

FightActionsService.registerItem({
  name: 'mana2',
  description: ['Se attivata, recuperi 2 mana.'],
  effect: (shared: SharedDataService) => {
    shared.tagsPreventFightEffect((shared)=>{
      shared.mana(2);
    }, 'freeze');
  },
  value: 2,
});
