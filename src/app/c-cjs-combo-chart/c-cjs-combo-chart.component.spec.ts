import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CCjsComboChartComponent } from './c-cjs-combo-chart.component';

describe('CCjsComboChartComponent', () => {
  let component: CCjsComboChartComponent;
  let fixture: ComponentFixture<CCjsComboChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CCjsComboChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CCjsComboChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
