import { Component, OnInit } from '@angular/core';
import { MazeMap, MazeTile, MazeInsight, MazeExploration } from 'src/app/models/maze-map.model';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { MazeExplorer } from 'src/app/services/maze-generator.service';
import { GamesCommonService } from 'src/app/services/games-common.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-maze-map',
  templateUrl: './maze-map.component.html',
  styleUrls: ['./maze-map.component.scss']
})
export class MazeMapComponent implements OnInit {

  showall: boolean;

  drawn: string[];
  drawable: string[];

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
    this.showall = environment.showall;
    this.drawn = this.shared.exploration.drawn;
    this.drawable = this.shared.exploration.drawable;
    this.mobs = this.shared.mobs.mobs;
    this.explorer = new MazeExplorer(this.shared.maze);
    const entry = MazeMap.tile(this.shared.maze, this.shared.exploration.entry);
    this.explorer.explore(entry.x, entry.y);
  }

  // actions

  draw(t: MazeTile) {
    MazeExploration.draw(this.shared.exploration, t);
    if (! this.mobs[MazeMap.coords(t)]) {
      this.expandDrawable(t);
    }
    this.shared.save();
  }

  expandDrawable(t: MazeTile) {
    MazeExploration.open(this.shared.exploration, MazeMap.connected(this.shared.maze, t));
    this.shared.save();
  }

  clickMonster(tile: MazeTile) {
    this.encounterTile = this.explorer.coords(tile);
    this.encounter = this.mobs[this.encounterTile];
  }

  doneMonster(event: string) {
    delete this.mobs[this.encounterTile];
    if (event === 'exit') {
      this.shared.exitMaze();
    } else {
      this.expandDrawable(MazeMap.tile(this.shared.maze, this.encounterTile));
      this.encounter = null;
      this.encounterTile = null;      
    }
    this.shared.save();
  }

  // html

  position(t: MazeTile): string {
    return `transform: translate(${100 * t.x}px, ${100 * t.y}px)`
  }

  distance(t: MazeTile): number {
    return this.explorer.pathfor[this.explorer.coords(t)].length;
  }

  viewBox() {
    return `0 0 ${100 * this.shared.maze.sizex} ${100 * this.shared.maze.sizey}`;
  }

  isDrawable(t: MazeTile): boolean {
    return this.drawable.includes(MazeMap.coords(t));
  }

  isDrawn(t: MazeTile): boolean {
    return this.drawn.includes(MazeMap.coords(t));
  }

}

