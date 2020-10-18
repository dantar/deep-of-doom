import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-wilderness-map',
  templateUrl: './wilderness-map.component.html',
  styleUrls: ['./wilderness-map.component.scss']
})
export class WildernessMapComponent implements OnInit {

  constructor(public shared: SharedDataService) { }

  mazes: AvailableMaze[];
  _mazes: {[id: string]: AvailableMaze};

  ngOnInit(): void {
    this.mazes = [];
    this._mazes = {};
    for (let index = 0; index <= this.shared.hero.progress; index++) {
      this._mazes[`maze-${index}`] = new AvailableMaze(index);
      this.mazes.push();
    }
  }

  clickMaze(name: string) {
    if (this.shared.hero.life > 0) {
      this.shared.enterMaze(name);
    }
  }

}

class AvailableMaze {

  size: number;
 
  constructor(level: number) {
    this.size = level;
  }

}