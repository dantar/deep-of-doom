import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobScrapsComponent } from './mob-scraps.component';

describe('MobScrapsComponent', () => {
  let component: MobScrapsComponent;
  let fixture: ComponentFixture<MobScrapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobScrapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobScrapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
