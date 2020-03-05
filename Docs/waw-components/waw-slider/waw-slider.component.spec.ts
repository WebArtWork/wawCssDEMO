import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WawSliderComponent } from './waw-slider.component';

describe('WawSliderComponent', () => {
  let component: WawSliderComponent;
  let fixture: ComponentFixture<WawSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WawSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WawSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
