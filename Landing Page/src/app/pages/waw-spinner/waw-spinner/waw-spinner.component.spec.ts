import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WawSpinnerComponent } from './waw-spinner.component';

describe('WawSpinnerComponent', () => {
  let component: WawSpinnerComponent;
  let fixture: ComponentFixture<WawSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WawSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WawSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
