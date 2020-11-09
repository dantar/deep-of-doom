import { Component, OnInit } from '@angular/core';
import { MobStats } from 'src/app/models/fight.model';
import { DungeonMasterService } from 'src/app/services/dungeon-master.service';

@Component({
  selector: 'svg:g[app-mob-spider]',
  templateUrl: './mob-spider.component.html',
  styleUrls: ['./mob-spider.component.scss']
})
export class MobSpiderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

DungeonMasterService.registerMob(
  {
    name: 'spider',
    actions: ['poison', 'poison', 'gold', 'gold'],
    life: 2,
    challenge: 'fight',
    exp: 3,
    blocks: true,
    component: MobSpiderComponent,
    tags: {},
    done: 'win',
    keywords: ['monster', 'spider'],
    supports: (mob: MobStats): string[] => {
      let support: string[] = [];
      if (mob.keywords.includes('exit')) {
        support.push('mobPoison');
      }
      return support;
    }
  },
);

