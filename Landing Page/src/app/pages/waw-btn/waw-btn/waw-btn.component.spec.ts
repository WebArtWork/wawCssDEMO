import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WawBtnComponent } from './waw-btn.component';

describe('WawBtnComponent', () => {
  let component: WawBtnComponent;
  let fixture: ComponentFixture<WawBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WawBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WawBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
