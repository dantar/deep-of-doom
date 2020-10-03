import { TestBed } from '@angular/core/testing';

import { DungeonMasterService } from './dungeon-master.service';

describe('DungeonMasterService', () => {
  let service: DungeonMasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DungeonMasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
