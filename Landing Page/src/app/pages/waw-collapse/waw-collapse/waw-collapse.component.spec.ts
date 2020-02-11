import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WawCollapseComponent } from './waw-collapse.component';

describe('WawCollapseComponent', () => {
  let component: WawCollapseComponent;
  let fixture: ComponentFixture<WawCollapseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WawCollapseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WawCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
