import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenInventoryComponent } from './open-inventory.component';

describe('OpenInventoryComponent', () => {
  let component: OpenInventoryComponent;
  let fixture: ComponentFixture<OpenInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
