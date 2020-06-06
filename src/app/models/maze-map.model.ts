export class MazeMap {
    sizex: number;
    sizey: number;
    rows: MazeTile[][];
}

export class MazeTile {
  x: number;
  y: number;
  north?: string;
  south?: string;
  east?: string;
  west?: string;
}

export class MazeConnection {
    a: MazeConnectionPoint; 
    b: MazeConnectionPoint; 
}

export class MazeConnectionPoint {
    x: number;
    y: number;
    d: 'north'|'south'|'east'|'west';
}