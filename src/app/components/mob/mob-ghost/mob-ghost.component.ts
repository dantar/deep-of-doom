import { Component, OnInit } from '@angular/core';
import { MobStats } from 'src/app/models/fight.model';
import { DungeonMasterService } from 'src/app/services/dungeon-master.service';

@Component({
  selector: '[app-mob-ghost]',
  templateUrl: './mob-ghost.component.html',
  styleUrls: ['./mob-ghost.component.scss']
})
export class MobGhostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

DungeonMasterService.registerMob(
  {
    name: 'ghost',
    actions: ['drainmana', 'hit', 'freeze'],
    life: 2,
    challenge: 'fight',
    exp: 3,
    blocks: true,
    component: MobGhostComponent,
    tags: {},
    done: 'win',
    keywords: ['monster', 'undead'],
    supports: (mob: MobStats): string[] => {
      let support: string[] = [];
      if (mob.keywords.includes('exit')) {
        support.push('addAction:drainmana');
      }
      return support;
    }
  },
);
