import { Component, OnInit } from '@angular/core';
import { MazeMap, MazeTile, MazeInsight } from 'src/app/models/maze-map.model';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { MazeExplorer } from 'src/app/services/maze-generator.service';
import { GamesCommonService } from 'src/app/services/games-common.service';

@Component({
  selector: 'app-maze-map',
  templateUrl: './maze-map.component.html',
  styleUrls: ['./maze-map.component.scss']
})
export class MazeMapComponent implements OnInit {

  drawn: MazeTile[];
  drawable: MazeTile[];

  mobs: {[id: string]: string};

  explorer: MazeExplorer;
  entry: MazeTile;
  exit: MazeTile;

  constructor(
    public shared: SharedDataService,
    public game: GamesCommonService,
  ) { }

  ngOnInit(): void {
    let insight = new MazeInsight().study(this.shared.maze);
    this.drawn = [];
    this.drawable = [];
    let farthest = 0;
    insight.exit1.forEach(d => {
      let explorer = new MazeExplorer(this.shared.maze);
      explorer.explore(d.x, d.y);
      if (!this.explorer || this.explorer.maxSteps() < explorer.maxSteps()) {
        this.explorer = explorer;
        this.entry = explorer.paths[0][0];
        this.exit = explorer.paths[0][-1];
      } 
    });
    this.draw(this.entry);
    // mobs
    this.mobs = {};
    let vaults = insight.exit1.filter(t => ![this.entry, this.exit].includes(t)).map(t => this.explorer.coords(t));
    this.game.shuffle(vaults);
    for (let index = 0; index < Math.min(10, vaults.length); index++) {
      this.mobs[vaults.pop()] = 'skeleton';
    }
  }

  draw(t: MazeTile) {
    this.drawn.push(t);
    if (t.north === 'open') {
      this.drawable.push(this.shared.maze.rows[t.x][t.y-1]);
    }
    if (t.south === 'open') {
      this.drawable.push(this.shared.maze.rows[t.x][t.y+1]);
    }
    if (t.east === 'open') {
      this.drawable.push(this.shared.maze.rows[t.x+1][t.y]);
    }
    if (t.west === 'open') {
      this.drawable.push(this.shared.maze.rows[t.x-1][t.y]);
    }
  }

  position(t: MazeTile): string {
    return `transform: translate(${100 * t.x}px, ${100 * t.y}px)`
  }

  distance(t: MazeTile): number {
    return this.explorer.pathfor[this.explorer.coords(t)].length;
  }

}

