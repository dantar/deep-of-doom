import { Component, Input, OnInit } from '@angular/core';
import { FightAction } from 'src/app/models/fight.model';
import { FightActionsService } from 'src/app/services/fight-actions.service';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: '[app-fight-search]',
  templateUrl: './fight-search.component.html',
  styleUrls: ['./fight-search.component.scss']
})
export class FightSearchComponent implements OnInit {

  @Input() action: FightAction;

  constructor() { }

  ngOnInit(): void {
  }

}

FightActionsService.registerItem({
  name: 'search',
  description: ['Se attivata, cerchi ma non trovi nulla'],
  effect: (shared: SharedDataService) => {
    shared.adjustMobLife(-1);
  },
  value: 1,
});
