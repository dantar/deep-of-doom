import { Component, Input, OnInit } from '@angular/core';
import { FightBuilder } from 'src/app/models/fight.model';
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
      'weapon': (fb: FightBuilder) => {
        fb.push('hit');
      },
      'armor': (fb: FightBuilder) => {
        fb.lifeUp();
        fb.push('fight');
      },
      'rich': (fb: FightBuilder) => {
        fb.push('gold');
      },
      'weak': (fb: FightBuilder) => {
        fb.push('fight');
      },
    },
    done: 'win',
  }
);

