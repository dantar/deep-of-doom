import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FightGoldComponent } from './fight-gold.component';

describe('FightGoldComponent', () => {
  let component: FightGoldComponent;
  let fixture: ComponentFixture<FightGoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FightGoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FightGoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
