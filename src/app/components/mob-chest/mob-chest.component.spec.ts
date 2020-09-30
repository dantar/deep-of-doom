import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobChestComponent } from './mob-chest.component';

describe('MobChestComponent', () => {
  let component: MobChestComponent;
  let fixture: ComponentFixture<MobChestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobChestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobChestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
