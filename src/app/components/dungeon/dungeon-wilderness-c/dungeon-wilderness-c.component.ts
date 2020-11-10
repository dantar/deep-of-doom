import { Component, OnInit } from '@angular/core';
import { DungeonMasterService } from 'src/app/services/dungeon-master.service';

@Component({
  selector: '[app-dungeon-wilderness-c]',
  templateUrl: './dungeon-wilderness-c.component.html',
  styleUrls: ['./dungeon-wilderness-c.component.scss']
})
export class DungeonWildernessCComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

DungeonMasterService.registerDungeon(
  {
    name: 'wilderness-c',
    size: 6,
    mobs: [
      {name: 'spider', tags: []},
      {name: 'troll', tags: []},
      {name: 'troll', tags: []},
      {name: 'skeleton', tags: []},
      {name: 'chest', tags: []},
    ],
    loot1: ['healingStone'],
    loot2: ['healingStone'],
    loot3: ['healingStone'],
  }
);