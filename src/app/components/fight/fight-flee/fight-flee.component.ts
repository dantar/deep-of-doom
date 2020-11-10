import { Component, OnInit } from '@angular/core';
import { FightActionsService } from 'src/app/services/fight-actions.service';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: '[app-fight-flee]',
  templateUrl: './fight-flee.component.html',
  styleUrls: ['./fight-flee.component.scss']
})
export class FightFleeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

FightActionsService.registerItem({
  name: 'flee',
  description: ['Se attivata, riesci a fuggire', 'L\'avversario non è sconfitto.'],
  effect: (shared: SharedDataService) => {
    shared.fight.outcome = 'fled';
  },
  value: 1,
});
