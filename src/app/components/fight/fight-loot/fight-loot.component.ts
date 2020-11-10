import { Component, Input, OnInit } from '@angular/core';
import { FightAction } from 'src/app/models/fight.model';
import { FightActionsService } from 'src/app/services/fight-actions.service';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: '[app-fight-loot]',
  templateUrl: './fight-loot.component.html',
  styleUrls: ['./fight-loot.component.scss']
})
export class FightLootComponent implements OnInit {

  @Input() action: FightAction;

  constructor() { }

  ngOnInit(): void {
  }

}

FightActionsService.registerItem({
  name: 'loot1',
  description: ['Se attivata, ottieni un oggetto COMUNE fra quelli disponibili nel labirinto in cui ti trovi.'],
  effect: (shared: SharedDataService) => {
    shared.rewardLoot(1);
  },
  value: 1,
});

FightActionsService.registerItem({
  name: 'loot2',
  description: ['Se attivata, ottieni un oggetto NON COMUNE fra quelli disponibili nel labirinto in cui ti trovi.'],
  effect: (shared: SharedDataService) => {
    shared.rewardLoot(2);
  },
  value: 2,
});

FightActionsService.registerItem({
  name: 'loot3',
  description: ['Se attivata, ottieni un oggetto RARO fra quelli disponibili nel labirinto in cui ti trovi.'],
  effect: (shared: SharedDataService) => {
    shared.rewardLoot(3);
  },
  value: 3,
});

