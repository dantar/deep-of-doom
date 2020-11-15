import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemManaStoneComponent } from './item-mana-stone.component';

describe('ItemManaStoneComponent', () => {
  let component: ItemManaStoneComponent;
  let fixture: ComponentFixture<ItemManaStoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemManaStoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemManaStoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
