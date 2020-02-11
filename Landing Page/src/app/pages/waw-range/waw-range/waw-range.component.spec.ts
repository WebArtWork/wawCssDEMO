import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WawRangeComponent } from './waw-range.component';

describe('WawRangeComponent', () => {
  let component: WawRangeComponent;
  let fixture: ComponentFixture<WawRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WawRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WawRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
