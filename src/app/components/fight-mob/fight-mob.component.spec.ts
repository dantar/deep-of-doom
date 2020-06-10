import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FightMobComponent } from './fight-mob.component';

describe('FightMobComponent', () => {
  let component: FightMobComponent;
  let fixture: ComponentFixture<FightMobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FightMobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FightMobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
