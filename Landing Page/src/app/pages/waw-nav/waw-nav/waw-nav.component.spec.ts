import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WawNavComponent } from './waw-nav.component';

describe('WawNavComponent', () => {
  let component: WawNavComponent;
  let fixture: ComponentFixture<WawNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WawNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WawNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
