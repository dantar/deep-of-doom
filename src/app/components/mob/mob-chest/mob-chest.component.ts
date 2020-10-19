import { Component, OnInit } from '@angular/core';
import { DungeonMasterService } from 'src/app/services/dungeon-master.service';

@Component({
  selector: 'svg:g[app-mob-chest]',
  templateUrl: './mob-chest.component.html',
  styleUrls: ['./mob-chest.component.scss']
})
export class MobChestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

DungeonMasterService.registerMob(
  {
    name: 'chest',
    actions: ['gold', 'gold', 'tough', 'trap'],
    life: 1,
    exp: 1,
    component: MobChestComponent,
    tags: {},
  }
);

