import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocBadgeComponent } from './doc-badge.component';

describe('DocBadgeComponent', () => {
  let component: DocBadgeComponent;
  let fixture: ComponentFixture<DocBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
