import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CCjsPieChartComponent } from './c-cjs-pie-chart.component';

describe('CCjsPieChartComponent', () => {
  let component: CCjsPieChartComponent;
  let fixture: ComponentFixture<CCjsPieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CCjsPieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CCjsPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
