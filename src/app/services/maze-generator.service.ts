import { Injectable } from '@angular/core';
import { MazeMap, MazeTile, MazeConnection, MazeMobs, MazeExploration, MazeInsight, MazeRooms } from '../models/maze-map.model';
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
      if (! new MazeChecker(maze).check(c.a.x, c.a.y, c.b.x, c.b.y)) {
        this.applyConnection(c, maze, prev);
      }
    });
    return maze;
  }

  exploration(maze: MazeMap): MazeExploration {
    let e: MazeExploration = {drawn: [], drawable: []};
    let insight = new MazeInsight().study(maze);
    e.drawn = [];
    e.drawable = [];
    let current: MazeExplorer;
    insight.exit1.forEach(d => {
      let explorer = new MazeExplorer(maze);
      explorer.explore(d.x, d.y);
      if (!current || current.maxSteps() < explorer.maxSteps()) {
        current = explorer;
        e.entry = MazeMap.coords(explorer.paths[0][0]);
        e.exit = MazeMap.coords(explorer.paths[0][explorer.paths[0].length -1]);
      } 
    });
    const t = MazeMap.tile(maze, e.entry);
    MazeExploration.draw(e, t);
    MazeExploration.open(e, MazeMap.connected(maze, t));
    return e;
  }

  mobs(maze: MazeMap, e: MazeExploration): MazeMobs {
    let insight = new MazeInsight().study(maze);
    let m: MazeMobs = {mobs: {}, active: []};
    m.mobs = {};
    let vaults = insight.exit1.map(t => MazeMap.coords(t)).filter(t => ![e.entry, e.exit].includes(t));
    for (let index = 0; index < Math.ceil(vaults.length / 2); index++) {
      m.mobs[this.games.randomPop(vaults)] = this.games.randomInt(0,2) == 0 ? 'spider' : 'chest';
    }
    let corridors = insight.exit2.map(t => MazeMap.coords(t));
    for (let index = 0; index < Math.ceil(corridors.length / 4); index++) {
      m.mobs[this.games.randomPop(corridors)] = this.games.randomInt(0,3) == 0 ? 'spider' : 'skeleton';
    }
    let splits = insight.exit3.map(t => MazeMap.coords(t));
    for (let index = 0; index < Math.ceil(splits.length / 3); index++) {
      m.mobs[this.games.randomPop(splits)] = this.games.randomInt(0,2) == 0 ? 'spider' : 'skeleton';
    }
    let crossway = insight.exit4.map(t => MazeMap.coords(t));
    for (let index = 0; index < Math.ceil(crossway.length / 2); index++) {
      m.mobs[this.games.randomPop(crossway)] = this.games.randomInt(0,1) == 0 ? 'spider' : 'skeleton';
    }
    m.mobs[e.exit] = 'exit';
    return m;
  }

  rooms(maze: MazeMap, e: MazeExploration, mobs: MazeMobs): MazeRooms {
    let insight = new MazeInsight().study(maze);
    let r: MazeRooms = {rooms: {}};
    insight.exit1.forEach(t => r.rooms[MazeMap.coords(t)] = 'plain');
    Object.keys(mobs.mobs).forEach(t => r.rooms[t] = 'plain');
    return r;
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
    return MazeMap.coords(t);
  }

}

export class MazeExplorer {

  maze: MazeMap;
  paths: MazeTile[][];
  pathfor: {[id: string]: MazeTile[]};
  tiles: {[id: string]: MazeTile};

  constructor(maze: MazeMap) {
    this.maze = maze;
  }

  explore(x: number, y: number) {
    this.paths = [];
    this.pathfor = {};
    this.tiles = {};
    this._explore(x, y, []);
  }

  private _explore(x: number, y: number, steps: MazeTile[]) {
    let tile = this.maze.rows[x][y];
    this.tiles[this.coords(tile)] = tile;
    steps.push(tile);
    if (this.pathfor.hasOwnProperty(this.coords(tile)) && this.pathfor[this.coords(tile)].length <= steps.length) {
      return;
    }
    this.pathfor[this.coords(tile)] = steps.map(t => t);
    if (tile.north === 'open') {
      this._explore(tile.x, tile.y-1, steps.map(t => t));
    }
    if (tile.south === 'open') {
      this._explore(tile.x, tile.y+1, steps.map(t => t));
    }
    if (tile.east === 'open') {
      this._explore(tile.x+1, tile.y, steps.map(t => t));
    }
    if (tile.west === 'open') {
      this._explore(tile.x-1, tile.y, steps.map(t => t));
    }
    this.paths = Object.keys(this.pathfor).map(k => this.pathfor[k]);
    this.paths.sort((a, b) => b.length === a.length ? 0: (b.length - a.length) / Math.abs(b.length - a.length) );
  }

  coords(t: MazeTile): string {
    return `${t.x}-${t.y}`;
  }

  maxSteps(): number {
    return this.paths[0].length;
  }

}

export class MazeChecker {

  maze: MazeMap;
  tiles: {[id: string]: MazeTile};
  tox: number;
  toy: number;

  constructor(maze: MazeMap) {
    this.maze = maze;
  }

  check(x: number, y: number, tox: number, toy: number): boolean {
    this.tox = tox;
    this.toy = toy;
    this.tiles = {};
    return this._check(x, y);
  }

  private _check(x: number, y: number): boolean {
    if (x === this.tox && y === this.toy) return true;
    let tile = this.maze.rows[x][y];
    let coords = this.coords(tile);
    if (this.tiles.hasOwnProperty(coords)) return false;
    this.tiles[coords] = tile;
    if (tile.north === 'open') {
      if (this._check(tile.x, tile.y-1)) return true;
    }
    if (tile.south === 'open') {
      if (this._check(tile.x, tile.y+1)) return true;
    }
    if (tile.east === 'open') {
      if (this._check(tile.x+1, tile.y)) return true;
    }
    if (tile.west === 'open') {
      if (this._check(tile.x-1, tile.y)) return true;
    }
    return false;
  }

  coords(t: MazeTile): string {
    return `${t.x}-${t.y}`;
  }

}