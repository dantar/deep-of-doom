export class MazeMap {
    sizex: number;
    sizey: number;
    rows: MazeTile[][];

    static coords(t: MazeTile) : string {
        return `${t.x}-${t.y}`;
    }
    static tile(maze: MazeMap, c: string) : MazeTile {
        const s = c.split('-').map(i => parseInt(i));
        return maze.rows[s[0]][s[1]];
    }
    static connected(m: MazeMap, t: MazeTile) : MazeTile[] {
        const c: MazeTile[] = [];
        if (t.north === 'open') {
            c.push(m.rows[t.x][t.y-1]);
        }
        if (t.south === 'open') {
            c.push(m.rows[t.x][t.y+1]);
        }
        if (t.east === 'open') {
            c.push(m.rows[t.x+1][t.y]);
        }
        if (t.west === 'open') {
            c.push(m.rows[t.x-1][t.y]);
        }
        return c;
    }
}

export class MazeMobs {
    mobs: {[id: string]: string};
    active: string[];
}

export class MazeExploration {
    drawn: string[];
    drawable: string[];
    entry?: string;
    exit?: string;

    static draw(e: MazeExploration, t: MazeTile) {
        const c = MazeMap.coords(t);
        if (e.drawable.includes(c)) {
            e.drawable.splice(e.drawable.indexOf(c), 1);
        }
        e.drawn.push(c);
    }

    static open(e: MazeExploration, tiles: MazeTile[]) {
        tiles.forEach(t => {
            e.drawable.push(MazeMap.coords(t));
        });
    }
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
    }
}
