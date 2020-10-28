import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldCostComponent } from './gold-cost.component';

describe('GoldCostComponent', () => {
  let component: GoldCostComponent;
  let fixture: ComponentFixture<GoldCostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoldCostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
