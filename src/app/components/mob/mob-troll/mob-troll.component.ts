import { Component, OnInit } from '@angular/core';
import { DungeonMasterService } from 'src/app/services/dungeon-master.service';

@Component({
  selector: '[app-mob-troll]',
  templateUrl: './mob-troll.component.html',
  styleUrls: ['./mob-troll.component.scss']
})
export class MobTrollComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

DungeonMasterService.registerMob(
  {
    name: 'troll',
    actions: ['hit2', 'hit2', 'gold', 'gold', 'gold'],
    life: 3,
    exp: 4,
    component: MobTrollComponent,
    tags: {},
  }
);
