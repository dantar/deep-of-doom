import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FightFreezeComponent } from './fight-freeze.component';

describe('FightFreezeComponent', () => {
  let component: FightFreezeComponent;
  let fixture: ComponentFixture<FightFreezeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FightFreezeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FightFreezeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
