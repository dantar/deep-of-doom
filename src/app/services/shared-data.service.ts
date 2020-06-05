import { Injectable } from '@angular/core';
import { MazeMap } from '../models/maze-map.model';
import { MazeGeneratorService } from './maze-generator.service';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  maze: MazeMap;

  constructor(private generator: MazeGeneratorService) {
    this.maze = this.generator.generate();
  }

}
