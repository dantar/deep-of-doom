import { TestBed } from '@angular/core/testing';

import { HeroDialogService } from './hero-dialog.service';

describe('HeroDialogService', () => {
  let service: HeroDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
