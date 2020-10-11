import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpcPlaceholderComponent } from './npc-placeholder.component';

describe('NpcPlaceholderComponent', () => {
  let component: NpcPlaceholderComponent;
  let fixture: ComponentFixture<NpcPlaceholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpcPlaceholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpcPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
