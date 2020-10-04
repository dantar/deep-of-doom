import { Component, OnInit } from '@angular/core';
import { DungeonMasterService } from 'src/app/services/dungeon-master.service';

@Component({
  selector: 'svg[app-mob-exit]',
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
    actions: ['gold', 'exit'],
    life: 1,
    component: MobExitComponent,
  }
);

