import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CCjsLineChartComponent } from './c-cjs-line-chart.component';

describe('CCjsLineChartComponent', () => {
  let component: CCjsLineChartComponent;
  let fixture: ComponentFixture<CCjsLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CCjsLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CCjsLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
