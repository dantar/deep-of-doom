import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FightManaLoseComponent } from './fight-mana-lose.component';

describe('FightManaLoseComponent', () => {
  let component: FightManaLoseComponent;
  let fixture: ComponentFixture<FightManaLoseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FightManaLoseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FightManaLoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
