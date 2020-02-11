import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WawProgressComponent } from './waw-progress.component';

describe('WawProgressComponent', () => {
  let component: WawProgressComponent;
  let fixture: ComponentFixture<WawProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WawProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WawProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
