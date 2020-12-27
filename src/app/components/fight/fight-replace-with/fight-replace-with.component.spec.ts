import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FightReplaceWithComponent } from './fight-replace-with.component';

describe('FightReplaceWithComponent', () => {
  let component: FightReplaceWithComponent;
  let fixture: ComponentFixture<FightReplaceWithComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FightReplaceWithComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FightReplaceWithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
