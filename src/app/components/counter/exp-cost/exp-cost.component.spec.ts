import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpCostComponent } from './exp-cost.component';

describe('ExpCostComponent', () => {
  let component: ExpCostComponent;
  let fixture: ComponentFixture<ExpCostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpCostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
