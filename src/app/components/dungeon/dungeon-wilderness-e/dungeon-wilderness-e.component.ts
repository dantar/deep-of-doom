import { Component, OnInit } from '@angular/core';
import { DungeonMasterService } from 'src/app/services/dungeon-master.service';

@Component({
  selector: '[app-dungeon-wilderness-e]',
  templateUrl: './dungeon-wilderness-e.component.html',
  styleUrls: ['./dungeon-wilderness-e.component.scss']
})
export class DungeonWildernessEComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

DungeonMasterService.registerDungeon(
  {
    name: 'wilderness-e',
    size: 8,
    mobs: [
      {name: 'spider', tags: []},
      {name: 'spider', tags: []},
      {name: 'spider', tags: []},
      {name: 'spider', tags: []},
      {name: 'spider', tags: []},
      {name: 'skeleton', tags: []},
      {name: 'chest', tags: []},
    ],
    loot1: ['healingStone'],
    loot2: ['healingStone'],
    loot3: ['healingStone'],
  }
);