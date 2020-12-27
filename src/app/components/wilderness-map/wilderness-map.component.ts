import { Component, OnInit } from '@angular/core';
import { LandMapService } from 'src/app/services/land-map.service';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-wilderness-map',
  templateUrl: './wilderness-map.component.html',
  styleUrls: ['./wilderness-map.component.scss']
})
export class WildernessMapComponent implements OnInit {

  constructor(
    public shared: SharedDataService,
    public land: LandMapService,
    ) { }

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

  clickLocation(name: string) {
    this.shared.enterDialog('bookshelf');
  }

}

class AvailableMaze {

  size: number;
 
  constructor(level: number) {
    this.size = level;
  }

}