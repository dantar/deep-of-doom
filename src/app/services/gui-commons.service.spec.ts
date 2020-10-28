import { TestBed } from '@angular/core/testing';

import { GuiCommonsService } from './gui-commons.service';

describe('GuiCommonsService', () => {
  let service: GuiCommonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuiCommonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
