import { Component, OnInit } from '@angular/core';
import { DungeonMasterService } from 'src/app/services/dungeon-master.service';

@Component({
  selector: 'svg:g[app-mob-skeleton]',
  templateUrl: './mob-skeleton.component.html',
  styleUrls: ['./mob-skeleton.component.scss']
})
export class MobSkeletonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

DungeonMasterService.registerMob(
  {
    name: 'skeleton',
    actions: ['tough', 'tough', 'hit', 'hit', 'gold'],
    life: 2,
    component: MobSkeletonComponent,
  }
);