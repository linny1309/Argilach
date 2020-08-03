import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CCjsScatterPlotComponent } from './c-cjs-scatter-plot.component';

describe('CCjsScatterPlotComponent', () => {
  let component: CCjsScatterPlotComponent;
  let fixture: ComponentFixture<CCjsScatterPlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CCjsScatterPlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CCjsScatterPlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
