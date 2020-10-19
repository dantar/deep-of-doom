import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DungeonWildernessEComponent } from './dungeon-wilderness-e.component';

describe('DungeonWildernessEComponent', () => {
  let component: DungeonWildernessEComponent;
  let fixture: ComponentFixture<DungeonWildernessEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DungeonWildernessEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DungeonWildernessEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
