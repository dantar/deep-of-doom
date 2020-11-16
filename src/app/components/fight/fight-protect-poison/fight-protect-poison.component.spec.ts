import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FightProtectPoisonComponent } from './fight-protect-poison.component';

describe('FightProtectPoisonComponent', () => {
  let component: FightProtectPoisonComponent;
  let fixture: ComponentFixture<FightProtectPoisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FightProtectPoisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FightProtectPoisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
