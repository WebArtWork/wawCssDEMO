import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WawLinksComponent } from './waw-links.component';

describe('WawLinksComponent', () => {
  let component: WawLinksComponent;
  let fixture: ComponentFixture<WawLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WawLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WawLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
