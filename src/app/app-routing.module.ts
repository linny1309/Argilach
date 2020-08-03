import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PDashboardComponent } from './p-dashboard/p-dashboard.component';
import { CLeftMenuComponent } from './c-left-menu/c-left-menu.component';
import { CTopBarComponent } from './c-top-bar/c-top-bar.component';
import { CRightMenuComponent } from './c-right-menu/c-right-menu.component';
import { CCjsLineChartComponent } from './c-cjs-line-chart/c-cjs-line-chart.component';
import { CCjsBarChartComponent } from './c-cjs-bar-chart/c-cjs-bar-chart.component';
import { CKpiCardComponent } from './c-kpi-card/c-kpi-card.component';
import { CCjsPieChartComponent } from './c-cjs-pie-chart/c-cjs-pie-chart.component';
import { CCjsScatterPlotComponent } from './c-cjs-scatter-plot/c-cjs-scatter-plot.component';
import { CCjsRadarChartComponent } from './c-cjs-radar-chart/c-cjs-radar-chart.component';
import { CCjsComboChartComponent } from './c-cjs-combo-chart/c-cjs-combo-chart.component';
import { CGenTableComponent } from './c-gen-table/c-gen-table.component';


const routes: Routes = [

  { path: 'p-dashboard', component: PDashboardComponent },

  { path: 'c-cjs-scatter-plot', component: CCjsScatterPlotComponent},
  { path: 'c-cjs-line-chart', component: CCjsLineChartComponent},
  { path: 'c-cjs-bar-chart', component: CCjsBarChartComponent},
  { path: 'c-cjs-pie-chart', component: CCjsPieChartComponent},
  { path: 'c-cjs-radar-chart', component: CCjsRadarChartComponent},
  { path: 'c-cjs-combo-chart', component: CCjsComboChartComponent},
  { path: 'c-gen-table', component: CGenTableComponent},

  { path: 'c-left-menu', component: CLeftMenuComponent },
  { path: 'c-right-menu', component: CRightMenuComponent },
  { path: 'c-top-bar', component: CTopBarComponent },
  { path: 'c-kpi-card', component: CKpiCardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
