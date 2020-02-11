import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WawInputComponent } from './waw-input.component';

describe('WawInputComponent', () => {
  let component: WawInputComponent;
  let fixture: ComponentFixture<WawInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WawInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WawInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
