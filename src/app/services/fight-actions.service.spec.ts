import { TestBed } from '@angular/core/testing';

import { FightActionsService } from './fight-actions.service';

describe('FightActionsService', () => {
  let service: FightActionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FightActionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
