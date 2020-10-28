import { Component, OnInit } from '@angular/core';
import { DungeonMasterService } from 'src/app/services/dungeon-master.service';

@Component({
  selector: 'svg:g[app-mob-exit]',
  templateUrl: './mob-exit.component.html',
  styleUrls: ['./mob-exit.component.scss']
})
export class MobExitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

DungeonMasterService.registerMob(
  {
    name: 'exit',
    actions: [],
    life: 1,
    exp: 1,
    blocks: false,
    component: MobExitComponent,
    tags: {},
  }
);

