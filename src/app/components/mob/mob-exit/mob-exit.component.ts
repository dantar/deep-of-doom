import { Component, OnInit } from '@angular/core';
import { MobStats } from 'src/app/models/fight.model';
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
    challenge: 'search',
    exp: 0,
    blocks: false,
    component: MobExitComponent,
    tags: {},
    done: 'exit',
    keywords: ['exit'],
    supported: (mob: MobStats) => {
      let support: string[] = [];
      if (mob.keywords.includes('monster')) {
        support.push('strongerMob');
      }
      return support;
    },
  }
);

