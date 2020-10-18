import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldCounterComponent } from './gold-counter.component';

describe('GoldCounterComponent', () => {
  let component: GoldCounterComponent;
  let fixture: ComponentFixture<GoldCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoldCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
