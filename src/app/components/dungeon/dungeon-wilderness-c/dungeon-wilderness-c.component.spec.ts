import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DungeonWildernessCComponent } from './dungeon-wilderness-c.component';

describe('DungeonWildernessCComponent', () => {
  let component: DungeonWildernessCComponent;
  let fixture: ComponentFixture<DungeonWildernessCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DungeonWildernessCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DungeonWildernessCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
