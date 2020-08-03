import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CCjsRadarChartComponent } from './c-cjs-radar-chart.component';

describe('CCjsRadarChartComponent', () => {
  let component: CCjsRadarChartComponent;
  let fixture: ComponentFixture<CCjsRadarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CCjsRadarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CCjsRadarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
