import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-home-village',
  templateUrl: './home-village.component.html',
  styleUrls: ['./home-village.component.scss']
})
export class HomeVillageComponent implements OnInit {

  constructor(
    public shared: SharedDataService,
  ) { }

  mazes: AvailableMaze[];

  ngOnInit(): void {
    this.mazes = [];
    for (let index = 0; index <= this.shared.hero.progress; index++) {
      this.mazes.push(new AvailableMaze(index));
      
    }
  }

  healWounds() {
    this.shared.gold(-3);
    this.shared.hero.poison = 0;
    this.shared.hero.life = this.shared.hero.maxlife;
    this.shared.hero.mana = this.shared.hero.maxmana;
  }

  enterMaze(maze: AvailableMaze) {
    if (this.shared.hero.life > 0) {
      this.shared.newMaze(maze.size);
    }
  }

}

class AvailableMaze {

  size: number;
 
  constructor(level: number) {
    this.size = level;
  }

}