import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WawTabComponent } from './waw-tab.component';

describe('WawTabComponent', () => {
  let component: WawTabComponent;
  let fixture: ComponentFixture<WawTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WawTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WawTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
