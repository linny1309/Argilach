import { PDashboardComponent } from './p-dashboard/p-dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';

import { AppComponent } from './app.component';
import { CTopBarComponent } from './c-top-bar/c-top-bar.component';
import { CRightMenuComponent } from './c-right-menu/c-right-menu.component';
import { CLeftMenuComponent } from './c-left-menu/c-left-menu.component';
import { CCjsLineChartComponent } from './c-cjs-line-chart/c-cjs-line-chart.component';
import { CCjsBarChartComponent } from './c-cjs-bar-chart/c-cjs-bar-chart.component';
import { CKpiCardComponent } from './c-kpi-card/c-kpi-card.component';
import { CCommentComponent } from './c-comment/c-comment.component';
import { CBottomContainerComponent } from './c-bottom-container/c-bottom-container.component';
import { CCjsBubbleChartComponent } from './c-cjs-bubble-chart/c-cjs-bubble-chart.component';
import { CCjsPieChartComponent } from './c-cjs-pie-chart/c-cjs-pie-chart.component';
import { CCjsScatterPlotComponent } from './c-cjs-scatter-plot/c-cjs-scatter-plot.component';
import { CCjsRadarChartComponent } from './c-cjs-radar-chart/c-cjs-radar-chart.component';
import { CCjsComboChartComponent } from './c-cjs-combo-chart/c-cjs-combo-chart.component';
import { CFilterMenuComponent } from './c-filter-menu/c-filter-menu.component';
import { CCalendarComponent } from './c-calendar/c-calendar.component';
import { CCalculatorComponent } from './c-calculator/c-calculator.component';
import { CGenTableComponent } from './c-gen-table/c-gen-table.component';
import { FormsModule } from '@angular/forms';
import { CCjsGranChartComponent } from './c-cjs-gran-chart/c-cjs-gran-chart.component';

@NgModule({
  declarations: [
    PDashboardComponent,
    AppComponent,
    CTopBarComponent,
    CRightMenuComponent,
    CLeftMenuComponent,
    CCjsLineChartComponent,
    CCjsBarChartComponent,
    CKpiCardComponent,
    CCommentComponent,
    CBottomContainerComponent,
    CCjsBubbleChartComponent,
    CCjsPieChartComponent,
    CCjsScatterPlotComponent,
    CCjsRadarChartComponent,
    CCjsComboChartComponent,
    CFilterMenuComponent,
    CCalendarComponent,
    CCalculatorComponent,
    CGenTableComponent,
    CCjsGranChartComponent,
  ],
  imports: [
    FormsModule,
    CalendarModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
