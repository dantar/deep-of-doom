import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManaCounterComponent } from './mana-counter.component';

describe('ManaCounterComponent', () => {
  let component: ManaCounterComponent;
  let fixture: ComponentFixture<ManaCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManaCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManaCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
