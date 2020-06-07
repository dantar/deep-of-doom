import { Component, OnInit } from '@angular/core';
import { MazeMap, MazeTile } from 'src/app/models/maze-map.model';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { MazeExplorer } from 'src/app/services/maze-generator.service';

@Component({
  selector: 'app-maze-map',
  templateUrl: './maze-map.component.html',
  styleUrls: ['./maze-map.component.scss']
})
export class MazeMapComponent implements OnInit {

  deadends: MazeTile[];

  explorer: MazeExplorer;
  entry: MazeTile;
  exit: MazeTile;

  constructor(
    public shared: SharedDataService,
  ) { }

  ngOnInit(): void {
    this.deadends = [];
    this.shared.maze.rows.forEach(tiles => {
      tiles
      .filter(t => [t.east, t.north, t.south, t.west].filter(exit => exit === 'open').length === 1)
      .forEach(t => this.deadends.push(t));
    });
    let farthest = 0;
    this.deadends.forEach(d => {
      let explorer = new MazeExplorer(this.shared.maze);
      explorer.explore(d.x, d.y);
      this.deadends
      .filter(o => o !==d)
      .forEach(o => {
        if (explorer.reach[explorer.coords(o)] > farthest) {
          farthest = explorer.reach[explorer.coords(o)];
          this.exit = o;
          this.entry = d;
          this.explorer = explorer;
        }
      });
    });

  }

  position(t: MazeTile): string {
    return `transform: translate(${100 * t.x}px, ${100 * t.y}px)`
  }

  distance(t: MazeTile): number {
    return this.explorer.reach[this.explorer.coords(t)];
  }

  isDeadEnd(t: MazeTile): boolean {
    return this.deadends.includes(t);
  }

}

