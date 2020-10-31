import { Component, OnInit } from '@angular/core';
import { DungeonMasterService } from 'src/app/services/dungeon-master.service';

@Component({
  selector: '[app-mob-scraps]',
  templateUrl: './mob-scraps.component.html',
  styleUrls: ['./mob-scraps.component.scss']
})
export class MobScrapsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

DungeonMasterService.registerMob(
  {
    name: 'scraps',
    actions: ['search', 'gold', 'gold', 'replace:shadow'],
    life: 1,
    challenge: 'search',
    exp: 0,
    blocks: false,
    component: MobScrapsComponent,
    tags: {},
    done: 'win',
  },
);
