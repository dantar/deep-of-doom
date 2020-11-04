import { Component, OnInit } from '@angular/core';
import { MobStats } from 'src/app/models/fight.model';
import { MazeInsight } from 'src/app/models/maze-map.model';
import { DungeonMasterService } from 'src/app/services/dungeon-master.service';
import { QuestBookService } from 'src/app/services/quest-book.service';
import { SharedDataService } from 'src/app/services/shared-data.service';

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

QuestBookService.registerQuest(
  {
    name: 'exit-wilderness-a',
    title: 'Scheletri sulle colline',
    hook: 'village-chief',

    request: [
      'Le colline fuori del villaggio sono infestate dagli scheletri che provengono dalle caverne sotto le colline. Riesci a trovare una strada che le attraversi?',
    ],
    location: 'wilderness-a',
    trigger: (shared: SharedDataService)=>{
      return !shared.quests.rewarded.includes('exit-wilderness-a');
    },
    prepare: (shared: SharedDataService)=>{
      shared.maze.mobs.mobs[shared.maze.exploration.exit] = {name: 'exit', tags: ['quest']};
    },
    check: (shared: SharedDataService)=>{
      return true;
    },
    thanks: ['Sei riuscito a trovare la strada attraverso le colline! Grazie!'],
    rewards: ['exp5'],
  }
);
