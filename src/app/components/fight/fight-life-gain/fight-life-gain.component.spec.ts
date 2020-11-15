import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FightLifeGainComponent } from './fight-life-gain.component';

describe('FightLifeGainComponent', () => {
  let component: FightLifeGainComponent;
  let fixture: ComponentFixture<FightLifeGainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FightLifeGainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FightLifeGainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
