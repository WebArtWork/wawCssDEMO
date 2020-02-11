import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WawMatMenuComponent } from './waw-mat-menu.component';

describe('WawMatMenuComponent', () => {
  let component: WawMatMenuComponent;
  let fixture: ComponentFixture<WawMatMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WawMatMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WawMatMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
