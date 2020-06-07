import { Injectable } from '@angular/core';
import { MazeMap, MazeTile, MazeConnection } from '../models/maze-map.model';
import { GamesCommonService } from './games-common.service';

@Injectable({
  providedIn: 'root'
})
export class MazeGeneratorService {

  walltypes: string[];

  constructor(private games: GamesCommonService) { 
    this.walltypes = ['open', 'wall'];
  }

  generate(x: number, y: number): MazeMap {
    let maze = this.canvas(x, y);
    let cs = this.connections(maze);
    this.games.shuffle(cs);
    cs.forEach(c => {
      let prev = this.applyConnection(c, maze, 'wall');
      let explorer = new MazeExplorer(maze);
      explorer.explore(0,0);
      if (Object.keys(explorer.reach).length < x*y) {
        this.applyConnection(c, maze, prev);
      }
    });
    return maze;
  }

  fullyConnected(maze: MazeMap): boolean {
    return false;
  }

  applyConnection(c: MazeConnection, m: MazeMap, t:string): string {
    let prev = m.rows[c.a.x][c.a.y][c.a.d];
    m.rows[c.a.x][c.a.y][c.a.d] = t;
    m.rows[c.b.x][c.b.y][c.b.d] = t;
    return prev;
  }

  canvas(maxx: number, maxy: number): MazeMap {
    let mmap: MazeMap = {rows: [], sizex: maxx, sizey: maxy};
    for (let x = 0; x < maxx; x++) {
      let row: MazeTile[] = [];
      mmap.rows.push(row);
      for (let y = 0; y < maxy; y++) {
        row.push({
          x:x,
          y:y,
          north: y > 0 ? 'open': 'wall',
          south: y+1 < maxy ? 'open': 'wall',
          east: x+1 < maxx ? 'open' : 'wall',
          west: x > 0 ? 'open' : 'wall',
        });
      }
    }
    return mmap;
  }  

  connections(m: MazeMap): MazeConnection[] {
    let c: MazeConnection[] = [];
    for (let x = 0; x < m.sizex; x++) {
      for (let y = 0; y < m.sizey -1; y++) {
        c.push({a: {x:x,y:y,d:'south'}, b: {x:x,y:y+1,d:'north'}});
        c.push({a: {x:y,y:x,d:'east'}, b: {x:y+1,y:x,d:'west'}});
      }
    }
    return c;
  }

  randomwall(): string {
    return this.walltypes[Math.floor(Math.random() * this.walltypes.length)];
  }

  coords(t: MazeTile): string {
    return `${t.x}-${t.y}`;
  }

}

export class MazeExplorer {

  maze: MazeMap;
  reach: {[id: string]: number};

  constructor(maze: MazeMap) {
    this.maze = maze;
  }

  explore(x: number, y: number) {
    this.reach = {};
    this._explore(x, y, 0);
  }

  private _explore(x: number, y: number, steps: number) {
    let tile = this.maze.rows[x][y];
    if (this.reach.hasOwnProperty(this.coords(tile)) && this.reach[this.coords(tile)] <= steps) {
      return;
    }
    this.reach[this.coords(tile)] = steps;
    if (tile.north === 'open') {
      this._explore(tile.x, tile.y-1, steps+1);
    }
    if (tile.south === 'open') {
      this._explore(tile.x, tile.y+1, steps+1);
    }
    if (tile.east === 'open') {
      this._explore(tile.x+1, tile.y, steps+1);
    }
    if (tile.west === 'open') {
      this._explore(tile.x-1, tile.y, steps+1);
    }
  }

  coords(t: MazeTile): string {
    return `${t.x}-${t.y}`;
  }

}