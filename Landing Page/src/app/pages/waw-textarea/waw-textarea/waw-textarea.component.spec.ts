import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WawTextareaComponent } from './waw-textarea.component';

describe('WawTextareaComponent', () => {
  let component: WawTextareaComponent;
  let fixture: ComponentFixture<WawTextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WawTextareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WawTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
