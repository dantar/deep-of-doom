import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellPlaceholderComponent } from './spell-placeholder.component';

describe('SpellPlaceholderComponent', () => {
  let component: SpellPlaceholderComponent;
  let fixture: ComponentFixture<SpellPlaceholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellPlaceholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
