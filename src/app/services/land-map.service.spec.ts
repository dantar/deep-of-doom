import { TestBed } from '@angular/core/testing';

import { LandMapService } from './land-map.service';

describe('LandMapService', () => {
  let service: LandMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
