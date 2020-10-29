import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemHealingStoneComponent } from './item-healing-stone.component';

describe('ItemHealingStoneComponent', () => {
  let component: ItemHealingStoneComponent;
  let fixture: ComponentFixture<ItemHealingStoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemHealingStoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemHealingStoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
