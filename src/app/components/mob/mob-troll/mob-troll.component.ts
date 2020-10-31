import { Component, OnInit } from '@angular/core';
import { MobStats } from 'src/app/models/fight.model';
import { DungeonMasterService } from 'src/app/services/dungeon-master.service';

@Component({
  selector: '[app-mob-troll]',
  templateUrl: './mob-troll.component.html',
  styleUrls: ['./mob-troll.component.scss']
})
export class MobTrollComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

DungeonMasterService.registerMob(
  {
    name: 'troll',
    actions: ['hit2', 'hit2', 'gold', 'gold', 'gold'],
    life: 3,
    challenge: 'fight',
    exp: 4,
    blocks: true,
    component: MobTrollComponent,
    tags: {},
    done: 'win',
    keywords: ['monster', 'troll'],
    supports: (mob: MobStats): string[] => {
      let support: string[] = [];
      if (mob.keywords.includes('exit')) {
        support.push('mobHit2');
      }
      return support;
    }
  }
);
