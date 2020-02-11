import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WawPopupComponent } from './waw-popup.component';

describe('WawPopupComponent', () => {
  let component: WawPopupComponent;
  let fixture: ComponentFixture<WawPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WawPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WawPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
