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

  ngOnInit(): void {
    this.mazes = [];
    for (let index = 0; index <= this.shared.hero.progress; index++) {
      this.mazes.push(new AvailableMaze(index));
      
    }
  }

  enterMaze(maze: AvailableMaze) {
    if (this.shared.hero.life > 0) {
      this.shared.newMaze(maze.size);
      this.shared.moveToMaze();
    }
  }

}

class AvailableMaze {

  size: number;
 
  constructor(level: number) {
    this.size = level;
  }

}