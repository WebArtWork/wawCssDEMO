import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WawScrollComponent } from './waw-scroll.component';

describe('WawScrollComponent', () => {
  let component: WawScrollComponent;
  let fixture: ComponentFixture<WawScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WawScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WawScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
