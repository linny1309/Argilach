import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CCjsBubbleChartComponent } from './c-cjs-bubble-chart.component';

describe('CCjsBubbleChartComponent', () => {
  let component: CCjsBubbleChartComponent;
  let fixture: ComponentFixture<CCjsBubbleChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CCjsBubbleChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CCjsBubbleChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
