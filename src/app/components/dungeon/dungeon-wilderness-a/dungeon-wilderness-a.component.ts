import { Component, OnInit } from '@angular/core';
import { DungeonMasterService } from 'src/app/services/dungeon-master.service';

@Component({
  selector: '[app-dungeon-wilderness-a]',
  templateUrl: './dungeon-wilderness-a.component.html',
  styleUrls: ['./dungeon-wilderness-a.component.scss']
})
export class DungeonWildernessAComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

DungeonMasterService.registerDungeon(
  {
    name: 'wilderness-a',
    size: 4,
    mobs: [
      {name: 'skeleton', tags: ['weak']},
      {name: 'skeleton', tags: ['weak']},
      {name: 'skeleton', tags: []},
      {name: 'skeleton', tags: []},
      {name: 'scraps', tags: []},
    ],
    loot1: ['healingStone', 'manaStone', 'protectPoisonStone'],
    loot2: ['healingStone', 'manaStone', 'protectPoisonStone'],
    loot3: ['healingStone', 'manaStone', 'protectPoisonStone'],
  }
);