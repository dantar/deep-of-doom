import { Component, OnInit } from '@angular/core';
import { DungeonMasterService } from 'src/app/services/dungeon-master.service';

@Component({
  selector: 'svg[app-mob-spider]',
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
    actions: ['tough', 'tough', 'trap', 'trap', 'gold', 'gold'],
    life: 2,
    component: MobSpiderComponent,
  }
);

