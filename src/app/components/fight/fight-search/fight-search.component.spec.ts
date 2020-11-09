import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FightSearchComponent } from './fight-search.component';

describe('FightSearchComponent', () => {
  let component: FightSearchComponent;
  let fixture: ComponentFixture<FightSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FightSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FightSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
