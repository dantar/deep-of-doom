import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DungeonWildernessAComponent } from './dungeon-wilderness-a.component';

describe('DungeonWildernessAComponent', () => {
  let component: DungeonWildernessAComponent;
  let fixture: ComponentFixture<DungeonWildernessAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DungeonWildernessAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DungeonWildernessAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
