import { Component, Input, OnInit } from '@angular/core';
import { FightAction } from 'src/app/models/fight.model';
import { FightActionsService } from 'src/app/services/fight-actions.service';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: '[app-fight-freeze]',
  templateUrl: './fight-freeze.component.html',
  styleUrls: ['./fight-freeze.component.scss']
})
export class FightFreezeComponent implements OnInit {

  @Input() action: FightAction;

  constructor() { }

  ngOnInit(): void {
  }

}

FightActionsService.registerItem({
  name: 'freeze',
  description: ['Se attivata, perdi la prossima tua azione'],
  effect: (shared: SharedDataService) => {
    shared.fight.tags.push('freeze');
  },
  value: 1,
});
