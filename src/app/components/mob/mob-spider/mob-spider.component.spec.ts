import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobSpiderComponent } from './mob-spider.component';

describe('MobSpiderComponent', () => {
  let component: MobSpiderComponent;
  let fixture: ComponentFixture<MobSpiderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobSpiderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobSpiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
