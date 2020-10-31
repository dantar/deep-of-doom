import { Component, Input, OnInit } from '@angular/core';
import { FightBuilder, MobStats } from 'src/app/models/fight.model';
import { MazeMob } from 'src/app/models/maze-map.model';
import { DungeonMasterService } from 'src/app/services/dungeon-master.service';

@Component({
  selector: 'svg:g[app-mob-skeleton]',
  templateUrl: './mob-skeleton.component.html',
  styleUrls: ['./mob-skeleton.component.scss']
})
export class MobSkeletonComponent implements OnInit {

  constructor() { }

  @Input() mob: MazeMob;

  ngOnInit(): void {
  }

}

DungeonMasterService.registerMob(
  {
    name: 'skeleton',
    actions: ['fight', 'hit', 'hit'],
    life: 2,
    challenge: 'fight',
    exp: 2,
    blocks: true,
    component: MobSkeletonComponent,
    tags: {
      'weapon': ['mobHit'],
      'armor': ['strongerMob'],
      'weak': ['weakerMob'],
    },
    done: 'replace:scraps',
    keywords: ['monster', 'undead'],
    supports: (mob: MobStats): string[] => {
      let support: string[] = [];
      if (mob.keywords.includes('exit')) {
        support.push('mobHit');
      }
      return support;
    }
  }
);

