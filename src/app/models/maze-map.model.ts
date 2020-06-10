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

export class MazeInsight {
    exit1: MazeTile[];
    exit2: MazeTile[];
    exit3: MazeTile[];
    exit4: MazeTile[];
    constructor() {
        this.exit1 = [];
        this.exit2 = [];
        this.exit3 = [];
        this.exit4 = [];
    }
    study(maze: MazeMap): MazeInsight {
        maze.rows.forEach(tiles => {
        tiles
        .forEach(t => 
            this['exit' + [t.east, t.north, t.south, t.west].filter(exit => exit === 'open').length].push(t)
            );
        });
        return this;
    };
}
