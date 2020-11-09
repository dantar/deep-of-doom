import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FightPoisonComponent } from './fight-poison.component';

describe('FightPoisonComponent', () => {
  let component: FightPoisonComponent;
  let fixture: ComponentFixture<FightPoisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FightPoisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FightPoisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
