import { Component, OnInit } from '@angular/core';
import { DungeonMasterService } from 'src/app/services/dungeon-master.service';

@Component({
  selector: '[app-dungeon-wilderness-b]',
  templateUrl: './dungeon-wilderness-b.component.html',
  styleUrls: ['./dungeon-wilderness-b.component.scss']
})
export class DungeonWildernessBComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

DungeonMasterService.registerDungeon(
  {
    name: 'wilderness-b',
    size: 5,
    mobs: [
      {name: 'spider', tags: []},
      {name: 'spider', tags: []},
      {name: 'skeleton', tags: []},
      {name: 'skeleton', tags: []},
      {name: 'chest', tags: []},
    ],
  }
);