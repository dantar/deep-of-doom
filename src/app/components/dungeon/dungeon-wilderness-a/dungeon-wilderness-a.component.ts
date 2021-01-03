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
      {name: 'ghost', tags: []},
      {name: 'skeleton', tags: []},
      {name: 'shadow', tags: []},
      {name: 'scraps', tags: []},
      {name: 'tomb', tags: []},
      {name: 'crystal', tags: []},
    ],
    loot1: ['healingStone'],
    loot2: ['healingStone'],
    // loot1: ['crystal', 'healingStone', 'manaStone', 'protectPoisonStone'],
    // loot2: ['healingStone', 'manaStone', 'protectPoisonStone'],
    loot3: ['healingStone', 'manaStone', 'protectPoisonStone'],
  }
);