import { Component, Input, OnInit } from '@angular/core';
import { FightAction } from 'src/app/models/fight.model';
import { MazeMob } from 'src/app/models/maze-map.model';
import { FightActionsService } from 'src/app/services/fight-actions.service';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: '[app-fight-replace-with]',
  templateUrl: './fight-replace-with.component.html',
  styleUrls: ['./fight-replace-with.component.scss']
})
export class FightReplaceWithComponent implements OnInit {

  @Input() action: FightActionReplace;

  constructor() { }

  ngOnInit(): void {
  }

}

class FightActionReplace extends FightAction {

  mob: MazeMob;

}

FightActionsService.registerItem({
  name: 'replaceWithShadow',
  description: ['Se attivata, evoca uno Spettro'],
  effect: (shared: SharedDataService) => {
    shared.fight.outcome = 'replace:shadow';
  },
  value: 1,
  mob: {name: 'shadow', tags: []},
} as FightActionReplace);

FightActionsService.registerItem({
  name: 'replaceWithSkeleton',
  description: ['Se attivata, evoca uno Scheletro'],
  effect: (shared: SharedDataService) => {
    shared.fight.outcome = 'replace:skeleton';
  },
  value: 1,
  mob: {name: 'skeleton', tags: []},
} as FightActionReplace);
