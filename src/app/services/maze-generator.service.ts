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

  generate(): MazeMap {
    let maze = this.canvas();
    let cs = this.connections();
    this.games.shuffle(cs);
    cs.splice(0, 3).forEach(c => {
      maze.rows[c.a.x][c.a.y][c.a.d] = 'open';
      maze.rows[c.b.x][c.b.y][c.b.d] = 'open';
    });
    return maze;
  }

  canvas(): MazeMap {
    let mmap: MazeMap = {rows: []};
    for (let x = 0; x < 10; x++) {
      let row: MazeTile[] = [];
      mmap.rows.push(row);
      for (let y = 0; y < 10; y++) {
        row.push({
          x:x,
          y:y,
          north: 'wall',
          south: 'wall',
          east: 'wall',
          west: 'wall',
        });
      }
    }
    return mmap;
  }  

  connections(): MazeConnection[] {
    let c: MazeConnection[] = [];
    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 9; y++) {
        c.push({a: {x:x,y:y,d:'south'}, b: {x:x,y:y+1,d:'north'}});
        c.push({a: {x:y,y:x,d:'east'}, b: {x:y+1,y:x,d:'west'}});
      }
    }
    return c;
  }

  randomwall(): string {
    return this.walltypes[Math.floor(Math.random() * this.walltypes.length)];
  }

}
