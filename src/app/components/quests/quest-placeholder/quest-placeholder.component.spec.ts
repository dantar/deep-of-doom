import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestPlaceholderComponent } from './quest-placeholder.component';

describe('QuestPlaceholderComponent', () => {
  let component: QuestPlaceholderComponent;
  let fixture: ComponentFixture<QuestPlaceholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestPlaceholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
