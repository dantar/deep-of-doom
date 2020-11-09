import { Component, Input, OnInit } from '@angular/core';
import { FightAction } from 'src/app/models/fight.model';
import { FightActionsService } from 'src/app/services/fight-actions.service';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: '[app-fight-mana-lose]',
  templateUrl: './fight-mana-lose.component.html',
  styleUrls: ['./fight-mana-lose.component.scss']
})
export class FightManaLoseComponent implements OnInit {

  @Input() action: FightAction;

  constructor() { }

  ngOnInit(): void {
  }

}

FightActionsService.registerItem({
  name: 'drainmana',
  description: ['Se attivata, perdi 1 mana.', 'Se esaurisci il mana, ogni altra perdita di mana ti fa perdere vite.'],
  effect: (shared: SharedDataService) => {
    shared.manaOrLife(-1);
  },
  value: -1,
});

FightActionsService.registerItem({
  name: 'drainmana2',
  description: ['Se attivata, perdi 1 mana.', 'Se esaurisci il mana, ogni altra perdita di mana ti fa perdere vite.'],
  effect: (shared: SharedDataService) => {
    shared.manaOrLife(-2);
  },
  value: -2,
});
