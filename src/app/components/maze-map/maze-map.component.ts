import { Component, OnInit } from '@angular/core';
import { MazeMap, MazeTile, MazeInsight } from 'src/app/models/maze-map.model';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { MazeExplorer } from 'src/app/services/maze-generator.service';
import { GamesCommonService } from 'src/app/services/games-common.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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

  encounter: string;
  encounterTile: string;

  constructor(
    public shared: SharedDataService,
    public game: GamesCommonService,
  ) { }

  ngOnInit(): void {
    let insight = new MazeInsight().study(this.shared.maze);
    this.drawn = [];
    this.drawable = [];
    insight.exit1.forEach(d => {
      let explorer = new MazeExplorer(this.shared.maze);
      explorer.explore(d.x, d.y);
      if (!this.explorer || this.explorer.maxSteps() < explorer.maxSteps()) {
        this.explorer = explorer;
        this.entry = explorer.paths[0][0];
        this.exit = explorer.paths[0][explorer.paths[0].length -1];
      } 
    });
    // mobs
    this.mobs = {};
    let vaults = insight.exit1.filter(t => ![this.entry, this.exit].includes(t)).map(t => this.explorer.coords(t));
    for (let index = 0; index < Math.ceil(vaults.length / 2); index++) {
      this.mobs[this.game.randomPop(vaults)] = 'chest';
    }
    let corridors = insight.exit2.map(t => this.explorer.coords(t));
    for (let index = 0; index < Math.ceil(corridors.length / 5); index++) {
      this.mobs[this.game.randomPop(corridors)] = 'skeleton';
    }
    let splits = insight.exit3.map(t => this.explorer.coords(t));
    for (let index = 0; index < Math.ceil(splits.length / 3); index++) {
      this.mobs[this.game.randomPop(splits)] = 'skeleton';
    }
    let crossway = insight.exit4.map(t => this.explorer.coords(t));
    for (let index = 0; index < Math.ceil(crossway.length / 3); index++) {
      this.mobs[this.game.randomPop(crossway)] = 'skeleton';
    }
    this.mobs[this.explorer.coords(this.exit)] = 'exit';
    // start
    this.draw(this.entry);
  }

  draw(t: MazeTile) {
    this.drawn.push(t);
    if (! this.mobs[this.explorer.coords(t)]) {
      this.expandDrawable(t);
    }
  }

  expandDrawable(t: MazeTile) {
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

  clickMonster(tile: MazeTile) {
    this.encounterTile = this.explorer.coords(tile);
    this.encounter = this.mobs[this.encounterTile];
  }

  doneMonster(event: string) {
    delete this.mobs[this.encounterTile];
    this.expandDrawable(this.explorer.tiles[this.encounterTile]);
    this.encounter = null;
    this.encounterTile = null;
    if (event === 'exit') {
      this.shared.maze = null;
    }
  }

  viewBox() {
    return `0 0 ${100 * this.shared.maze.sizex} ${100 * this.shared.maze.sizey}`;
  }

}

