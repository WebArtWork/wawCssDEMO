import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WawSwitchComponent } from './waw-switch.component';

describe('WawSwitchComponent', () => {
  let component: WawSwitchComponent;
  let fixture: ComponentFixture<WawSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WawSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WawSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
