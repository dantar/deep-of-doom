import { Component, Input, OnInit } from '@angular/core';
import { FightAction } from 'src/app/models/fight.model';
import { FightActionsService } from 'src/app/services/fight-actions.service';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: '[app-fight-gold]',
  templateUrl: './fight-gold.component.html',
  styleUrls: ['./fight-gold.component.scss']
})
export class FightGoldComponent implements OnInit {

  @Input() action: FightAction;

  constructor() { }

  ngOnInit(): void {
  }

}

FightActionsService.registerItem({
  name: 'gold',
  description: ['Se attivata, guadagni 1 moneta d\'oro'],
  effect: (shared: SharedDataService) => {
    shared.gold(1);
  },
  value: 1,
});

FightActionsService.registerItem({
  name: 'gold2',
  description: ['Se attivata, guadagni 2 monete d\'oro'],
  effect: (shared: SharedDataService) => {
    shared.gold(2);
  },
  value: 2,
});
