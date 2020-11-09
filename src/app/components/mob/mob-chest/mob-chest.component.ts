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
    actions: ['stuff', 'gold', 'gold', 'poison'],
    life: 2,
    challenge: 'search',
    exp: 1,
    blocks: false,
    component: MobChestComponent,
    tags: {},
    done: 'win',
    keywords: ['treasure', 'poison'],
  }
);

