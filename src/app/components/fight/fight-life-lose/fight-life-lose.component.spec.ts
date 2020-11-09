import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FightLifeLoseComponent } from './fight-life-lose.component';

describe('FightLifeLoseComponent', () => {
  let component: FightLifeLoseComponent;
  let fixture: ComponentFixture<FightLifeLoseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FightLifeLoseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FightLifeLoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
