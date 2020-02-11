import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WawSelectComponent } from './waw-select.component';

describe('WawSelectComponent', () => {
  let component: WawSelectComponent;
  let fixture: ComponentFixture<WawSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WawSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WawSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
