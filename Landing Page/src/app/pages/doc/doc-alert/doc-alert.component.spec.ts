import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocAlertComponent } from './doc-alert.component';

describe('DocAlertComponent', () => {
  let component: DocAlertComponent;
  let fixture: ComponentFixture<DocAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
