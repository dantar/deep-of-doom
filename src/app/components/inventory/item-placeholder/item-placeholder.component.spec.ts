import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPlaceholderComponent } from './item-placeholder.component';

describe('ItemPlaceholderComponent', () => {
  let component: ItemPlaceholderComponent;
  let fixture: ComponentFixture<ItemPlaceholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemPlaceholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
