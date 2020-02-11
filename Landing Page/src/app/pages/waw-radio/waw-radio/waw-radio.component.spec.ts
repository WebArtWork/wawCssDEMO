import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WawRadioComponent } from './waw-radio.component';

describe('WawRadioComponent', () => {
  let component: WawRadioComponent;
  let fixture: ComponentFixture<WawRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WawRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WawRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
