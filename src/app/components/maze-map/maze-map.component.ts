import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maze-map',
  templateUrl: './maze-map.component.html',
  styleUrls: ['./maze-map.component.scss']
})
export class MazeMapComponent implements OnInit {

  rows: MazeTile[][];

  walltypes: string[];

  constructor() { }

  ngOnInit(): void {
    this.walltypes = ['open', 'wall'];
    this.rows = [];
    for (let x = 0; x < 10; x++) {
      let row: MazeTile[] = [];
      this.rows.push(row);
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
  }
  randomwall(): string {
    return this.walltypes[Math.floor(Math.random() * this.walltypes.length)];
  }

  position(t: MazeTile): string {
    return `transform: translate(${10 * t.x}px, ${10 * t.y}px)`
  }

}

class MazeTile {
  x: number;
  y: number;

  north?: string;
  south?: string;
  east?: string;
  west?: string;
}
