import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CCjsBarChartComponent } from './c-cjs-bar-chart.component';

describe('CCjsBarChartComponent', () => {
  let component: CCjsBarChartComponent;
  let fixture: ComponentFixture<CCjsBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CCjsBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CCjsBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
