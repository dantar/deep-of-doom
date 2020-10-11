import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpcHealerComponent } from './npc-healer.component';

describe('NpcHealerComponent', () => {
  let component: NpcHealerComponent;
  let fixture: ComponentFixture<NpcHealerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpcHealerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpcHealerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
