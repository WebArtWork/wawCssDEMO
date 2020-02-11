import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WawAlertComponent } from './waw-alert.component';

describe('WawAlertComponent', () => {
  let component: WawAlertComponent;
  let fixture: ComponentFixture<WawAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WawAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WawAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
