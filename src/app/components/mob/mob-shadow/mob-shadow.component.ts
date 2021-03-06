import { Component, OnInit } from '@angular/core';
import { MobStats } from 'src/app/models/fight.model';
import { DungeonMasterService } from 'src/app/services/dungeon-master.service';

@Component({
  selector: '[app-mob-shadow]',
  templateUrl: './mob-shadow.component.html',
  styleUrls: ['./mob-shadow.component.scss']
})
export class MobShadowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

DungeonMasterService.registerMob(
  {
    name: 'shadow',
    actions: ['drainmana', 'drainmana'],
    life: 1,
    challenge: 'fight',
    exp: 1,
    blocks: true,
    component: MobShadowComponent,
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

