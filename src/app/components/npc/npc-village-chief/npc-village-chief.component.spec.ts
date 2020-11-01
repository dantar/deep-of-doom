import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpcVillageChiefComponent } from './npc-village-chief.component';

describe('NpcVillageChiefComponent', () => {
  let component: NpcVillageChiefComponent;
  let fixture: ComponentFixture<NpcVillageChiefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpcVillageChiefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpcVillageChiefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
