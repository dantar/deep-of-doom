import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionPlaceholderComponent } from './action-placeholder.component';

describe('ActionPlaceholderComponent', () => {
  let component: ActionPlaceholderComponent;
  let fixture: ComponentFixture<ActionPlaceholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionPlaceholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
