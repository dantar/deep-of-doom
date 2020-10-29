import { TestBed } from '@angular/core/testing';

import { ItemsLoreService } from './items-lore.service';

describe('ItemsLoreService', () => {
  let service: ItemsLoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemsLoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
