import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FightHitMobComponent } from './fight-hit-mob.component';

describe('FightHitMobComponent', () => {
  let component: FightHitMobComponent;
  let fixture: ComponentFixture<FightHitMobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FightHitMobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FightHitMobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
