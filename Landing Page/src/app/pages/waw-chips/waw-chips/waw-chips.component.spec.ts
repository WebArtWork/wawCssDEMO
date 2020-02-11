import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WawChipsComponent } from './waw-chips.component';

describe('WawChipsComponent', () => {
  let component: WawChipsComponent;
  let fixture: ComponentFixture<WawChipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WawChipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WawChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
