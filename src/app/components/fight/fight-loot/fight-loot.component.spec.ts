import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FightLootComponent } from './fight-loot.component';

describe('FightLootComponent', () => {
  let component: FightLootComponent;
  let fixture: ComponentFixture<FightLootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FightLootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FightLootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
