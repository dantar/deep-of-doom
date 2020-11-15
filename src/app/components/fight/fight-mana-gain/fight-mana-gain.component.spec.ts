import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FightManaGainComponent } from './fight-mana-gain.component';

describe('FightManaGainComponent', () => {
  let component: FightManaGainComponent;
  let fixture: ComponentFixture<FightManaGainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FightManaGainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FightManaGainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
