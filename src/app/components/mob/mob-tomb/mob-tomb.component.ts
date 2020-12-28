import { Component, OnInit } from '@angular/core';
import { DungeonMasterService } from 'src/app/services/dungeon-master.service';

@Component({
  selector: '[app-mob-tomb]',
  templateUrl: './mob-tomb.component.html',
  styleUrls: ['./mob-tomb.component.scss']
})
export class MobTombComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

DungeonMasterService.registerMob(
  {
    name: 'tomb',
    actions: ['search', 'loot1', 'loot1', 'loot2', 'replaceWithShadow', 'replaceWithSkeleton'],
    life: 2,
    challenge: 'search',
    exp: 1,
    blocks: false,
    component: MobTombComponent,
    tags: {},
    done: 'win',
    keywords: ['treasure', 'undead'],
  }
);
