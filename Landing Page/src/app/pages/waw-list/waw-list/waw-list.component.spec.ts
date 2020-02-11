import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WawListComponent } from './waw-list.component';

describe('WawListComponent', () => {
  let component: WawListComponent;
  let fixture: ComponentFixture<WawListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WawListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WawListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
