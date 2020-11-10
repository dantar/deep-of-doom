import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FightFleeComponent } from './fight-flee.component';

describe('FightFleeComponent', () => {
  let component: FightFleeComponent;
  let fixture: ComponentFixture<FightFleeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FightFleeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FightFleeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
