import { TestBed } from '@angular/core/testing';

import { SpellMasterService } from './spell-master.service';

describe('SpellMasterService', () => {
  let service: SpellMasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpellMasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
