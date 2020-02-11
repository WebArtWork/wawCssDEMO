import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WawCheckboxComponent } from './waw-checkbox.component';

describe('WawCheckboxComponent', () => {
  let component: WawCheckboxComponent;
  let fixture: ComponentFixture<WawCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WawCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WawCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
