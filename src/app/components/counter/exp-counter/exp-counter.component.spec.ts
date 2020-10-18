import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpCounterComponent } from './exp-counter.component';

describe('ExpCounterComponent', () => {
  let component: ExpCounterComponent;
  let fixture: ComponentFixture<ExpCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
