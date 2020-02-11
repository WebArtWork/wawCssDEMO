import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WawCardComponent } from './waw-card.component';

describe('WawCardComponent', () => {
  let component: WawCardComponent;
  let fixture: ComponentFixture<WawCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WawCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WawCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
