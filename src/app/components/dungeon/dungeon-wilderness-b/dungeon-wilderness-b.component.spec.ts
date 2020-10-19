import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DungeonWildernessBComponent } from './dungeon-wilderness-b.component';

describe('DungeonWildernessBComponent', () => {
  let component: DungeonWildernessBComponent;
  let fixture: ComponentFixture<DungeonWildernessBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DungeonWildernessBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DungeonWildernessBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
