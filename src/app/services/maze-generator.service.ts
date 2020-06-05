import { Injectable } from '@angular/core';
import { MazeMap, MazeTile } from '../models/maze-map.model';

@Injectable({
  providedIn: 'root'
})
export class MazeGeneratorService {

  walltypes: string[];

  constructor() { 
    this.walltypes = ['open', 'wall'];
  }

  generate(): MazeMap {
    let mmap: MazeMap = {rows: []};
    for (let x = 0; x < 10; x++) {
      let row: MazeTile[] = [];
      mmap.rows.push(row);
      for (let y = 0; y < 10; y++) {
        row.push({
          x:x,
          y:y,
          north: this.randomwall(),
          south: this.randomwall(),
          east: this.randomwall(),
          west: this.randomwall(),
        });
      }
    }
    return mmap;
  }  

  randomwall(): string {
    return this.walltypes[Math.floor(Math.random() * this.walltypes.length)];
  }

}
