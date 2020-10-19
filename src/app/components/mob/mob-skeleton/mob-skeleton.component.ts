import { Component, OnInit } from '@angular/core';
import { DungeonMasterService, FightBuilder } from 'src/app/services/dungeon-master.service';

@Component({
  selector: 'svg:g[app-mob-skeleton]',
  templateUrl: './mob-skeleton.component.html',
  styleUrls: ['./mob-skeleton.component.scss']
})
export class MobSkeletonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

DungeonMasterService.registerMob(
  {
    name: 'skeleton',
    actions: ['tough', 'tough', 'tough', 'hit', 'hit'],
    life: 2,
    exp: 2,
    component: MobSkeletonComponent,
    tags: {
      'weapon': (fb: FightBuilder) => {
        fb.push('hit');
      },
      'armor': (fb: FightBuilder) => {
        fb.lifeUp();
        fb.push('tough');
      },
      'rich': (fb: FightBuilder) => {
        fb.push('gold');
      },
      'weak': (fb: FightBuilder) => {
        fb.push('tough');
      },
    }
  }
);

