import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WawTooltipComponent } from './waw-tooltip.component';

describe('WawTooltipComponent', () => {
  let component: WawTooltipComponent;
  let fixture: ComponentFixture<WawTooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WawTooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WawTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
