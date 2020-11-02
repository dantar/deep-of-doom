import { TestBed } from '@angular/core/testing';

import { QuestBookService } from './quest-book.service';

describe('QuestBookService', () => {
  let service: QuestBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
