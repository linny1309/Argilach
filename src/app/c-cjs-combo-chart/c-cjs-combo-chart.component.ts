import { Component, OnInit } from '@angular/core';
import { preserveWhitespacesDefault } from '@angular/compiler';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { bindCallback } from 'rxjs';

const Chart = require("chart.js");

var data =  {
  datasets: [{
      label: 'Bulk Orders Placed',
      data: [22, 30, 36, 49],
      borderColor: 'rgb(28, 50, 110)',
      backgroundColor: 'rgba(28, 50, 110,0.5)',
      borderWidth: 2,
      order: 1,
      beginAtZero: true,
      min: 0,
      yAxisID: 'A',
  }, {
      label: 'Bulk Orders per Customer',
      data: [2, 2, 6, 7],
      type: 'line',
      borderColor: 'rgb(234, 0, 128)',
      backgroundColor: 'rgba(234, 0, 128,0.5)',
      borderWidth: 2,
      order: 2,
      beginAtZero: true,
      min: 0,
      yAxisID: 'B',
  }],
  labels: ['Q1', 'Q2', 'Q3', 'Q4']
}

var options = {
  title: {
    text: "Bulk Orders Placed vs Bulk Orders per Customer",
    display: true,
    fontSize: 20,
    fontColor: "white"
  },
    scales: {
      xAxes: [{
        scaleLabel: {
          fontColor: "white",
          display: true,
          fontSize: 10,
          labelString: "Quarter",
          },
      }],
      yAxes: [{
        id: 'A',
        type: 'linear',
        position: 'left',
        ticks: {
          max: 50,
          min: 0
        },
        scaleLabel: {
          fontColor: "white",
          display: true,
          fontSize: 10,
          labelString: "Bulk Orders Placed",
          },
        }, 
        {
        id: 'B',
        type: 'linear',
        position: 'right',
        ticks: {
          max: 10,
          min: 0
        },
        scaleLabel: {
          fontColor: "white",
          display: true,
          fontSize: 10,
          labelString: "Bulk Orders Per Customer",
          },
    }]
  }
};


@Component({
  selector: 'c-cjs-combo-chart',
  templateUrl: './c-cjs-combo-chart.component.html',
  styleUrls: ['./c-cjs-combo-chart.component.css']
})
export class CCjsComboChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var myChart = new Chart('myComboChart', {
      type: 'bar',
      data: data,
      options: options
  });

  }

}
