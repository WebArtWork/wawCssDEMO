import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WawBadgeComponent } from './waw-badge.component';

describe('WawBadgeComponent', () => {
  let component: WawBadgeComponent;
  let fixture: ComponentFixture<WawBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WawBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WawBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
