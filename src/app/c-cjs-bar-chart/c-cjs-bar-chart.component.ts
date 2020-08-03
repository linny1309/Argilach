import { Component, OnInit } from '@angular/core';
import { preserveWhitespacesDefault } from '@angular/compiler';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { bindCallback } from 'rxjs';

const JSONData = require("./json/data.json");
const Chart = require("chart.js");

var sequence0 = [0,3,6,9,12,15,18,21,24,27,30,33];
var sequence1 = [1,4,7,10,13,16,19,22,25,28,31,34];
var sequence2 = [2,5,8,11,14,17,20,23,26,29,32,35];

var monthNum = [];

var labels0 = [];
var labels1 = [];
var labels2 = [];

var measures0 = [];
var measures1 = [];
var measures2 = [];

var mc;
var chart;

function mediaCheck(m) {
  if (m.matches) { // If media query matches
    mc = 0;
  } else {
    mc = 1;
  }
}

@Component({
  selector: 'c-cjs-bar-chart',
  templateUrl: './c-cjs-bar-chart.component.html',
  styleUrls: ['./c-cjs-bar-chart.component.css']
})

export class CCjsBarChartComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    
    chart = new Chart('myBarChart', {
      // The type of chart we want to create
      type: 'bar',
      plugins: [ChartDataLabels],
      // The data for our dataset
      data: {
          labels: [JSONData[0].date, JSONData[3].date, JSONData[6].date, JSONData[9].date, JSONData[12].date, JSONData[15].date, JSONData[18].date, JSONData[21].date, JSONData[24].date, JSONData[27].date, JSONData[30].date, JSONData[33].date],
          datasets: [{
              label: JSONData[0].dimension_1,
              backgroundColor: "rgba(255, 166, 0, 0.5)",
              hoverBackgroundColor: "rgb(255, 166, 0)",
              borderColor: "rgb(255, 166, 0)",
              borderWidth: 2,
              data: [JSONData[0].measure_1, JSONData[3].measure_1, JSONData[6].measure_1, JSONData[9].measure_1, JSONData[12].measure_1, JSONData[15].measure_1, JSONData[18].measure_1, JSONData[21].measure_1, JSONData[24].measure_1, JSONData[27].measure_1, JSONData[30].measure_1, JSONData[33].measure_1],
              datalabels: {
                color: 'white'
              },
          }, {
              label: JSONData[1].dimension_1,
              backgroundColor: 'rgba(0, 183, 255, .5)',
              hoverBackgroundColor: "rgb(0, 183, 255)",
              borderColor: "rgb(0, 183, 255)",
              borderWidth: 2,
              data: [JSONData[1].measure_1, JSONData[4].measure_1, JSONData[7].measure_1, JSONData[10].measure_1, JSONData[13].measure_1, JSONData[16].measure_1, JSONData[19].measure_1, JSONData[22].measure_1, JSONData[25].measure_1, JSONData[28].measure_1, JSONData[31].measure_1, JSONData[34].measure_1],
              datalabels: {
                color: 'white'
              },
          }, {
              label: JSONData[2].dimension_1,
              backgroundColor: 'rgba(238, 0, 255,.5)',
              hoverBackgroundColor: 'rgb(238, 0, 255)',
              borderColor: 'rgb(238, 0, 255)',
              borderWidth: 2,
              data: [JSONData[2].measure_1, JSONData[5].measure_1, JSONData[8].measure_1, JSONData[11].measure_1, JSONData[14].measure_1, JSONData[17].measure_1, JSONData[20].measure_1, JSONData[23].measure_1, JSONData[26].measure_1, JSONData[29].measure_1, JSONData[32].measure_1, JSONData[35].measure_1],
              datalabels: {
                color: 'white',
              },
          }],
      },
      // Configuration options go here
      options: {
        title: {
          display: true,
          text: 'Paid Clicks by Application Type',
          fontColor: "white",
          fontSize: 20
      },
        legend: {
          labels: {
            fontSize: 10,
            fontColor: 'white'
        }
      },
      scales: {
        yAxes: [{
            ticks: { 
                fontColor: "white",
                fontSize: 10,
                beginAtZero: true
            },
            scaleLabel: {
              fontColor: "white",
              display: true,
              fontSize: 10,
              labelString: "Paid Clicks (Thousands)",
          }
        }],
        xAxes: 
        [{
            ticks: {
                fontColor: "white",
                fontSize: 10,
                beginAtZero: true
            },
            scaleLabel: {
              fontColor: "white",
              display: true,
              fontSize: 10,
              labelString: "Week",
          }
        }]
    }
    }
  });
  }

  onResizeType() {

    var m;
  
    m = window.matchMedia("(max-height: 500px)")
    mediaCheck(m); // Call listener function at run time
  
  };
}
