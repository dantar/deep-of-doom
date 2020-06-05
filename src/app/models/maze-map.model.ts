export class MazeMap {
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
