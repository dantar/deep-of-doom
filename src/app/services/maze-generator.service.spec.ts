import { TestBed } from '@angular/core/testing';

import { MazeGeneratorService, MazeExplorer } from './maze-generator.service';

describe('MazeGeneratorService', () => {
  let service: MazeGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MazeGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('generates maze', () => {
    expect(service.generate(10, 10)).toBeTruthy();
  });

  it('explorer visit', () => {
    let maze = service.canvas(2, 2);
    let explorer = new MazeExplorer(maze);
    explorer.explore(0, 0);
    expect(explorer.reach['0-0']).toBe(0);
    expect(explorer.reach['0-1']).toBe(1);
    expect(explorer.reach['1-0']).toBe(1);
    expect(explorer.reach['1-1']).toBe(2);
  });

});
