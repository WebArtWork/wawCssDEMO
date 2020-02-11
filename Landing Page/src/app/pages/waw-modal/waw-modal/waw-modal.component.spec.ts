import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WawModalComponent } from './waw-modal.component';

describe('WawModalComponent', () => {
  let component: WawModalComponent;
  let fixture: ComponentFixture<WawModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WawModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WawModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
