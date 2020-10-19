import { Component, OnInit } from '@angular/core';
import { DungeonMasterService } from 'src/app/services/dungeon-master.service';

@Component({
  selector: '[app-dungeon-wilderness-d]',
  templateUrl: './dungeon-wilderness-d.component.html',
  styleUrls: ['./dungeon-wilderness-d.component.scss']
})
export class DungeonWildernessDComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

DungeonMasterService.registerDungeon(
  {
    name: 'wilderness-d',
    size: 7,
  }
);