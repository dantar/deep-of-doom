import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DungeonWildernessDComponent } from './dungeon-wilderness-d.component';

describe('DungeonWildernessDComponent', () => {
  let component: DungeonWildernessDComponent;
  let fixture: ComponentFixture<DungeonWildernessDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DungeonWildernessDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DungeonWildernessDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
