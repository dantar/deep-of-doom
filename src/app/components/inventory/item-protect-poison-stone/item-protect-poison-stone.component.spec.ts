import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemProtectPoisonStoneComponent } from './item-protect-poison-stone.component';

describe('ItemProtectPoisonStoneComponent', () => {
  let component: ItemProtectPoisonStoneComponent;
  let fixture: ComponentFixture<ItemProtectPoisonStoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemProtectPoisonStoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemProtectPoisonStoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
