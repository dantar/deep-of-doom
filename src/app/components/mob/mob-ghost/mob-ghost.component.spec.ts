import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobGhostComponent } from './mob-ghost.component';

describe('MobGhostComponent', () => {
  let component: MobGhostComponent;
  let fixture: ComponentFixture<MobGhostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobGhostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobGhostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
