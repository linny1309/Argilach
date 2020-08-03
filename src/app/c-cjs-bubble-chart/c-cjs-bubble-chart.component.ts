import { Component, OnInit } from '@angular/core';
import { preserveWhitespacesDefault } from '@angular/compiler';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { bindCallback } from 'rxjs';

var chart;
const JSONData = require("./json/data.json");
const Chart = require("chart.js");
var n = 0;
var i = 1;
var dataset0 = [];
var dataset1 = [];
var dataset2 = [];
var x;
var y;
var r;

var options = {
  title: {
    display: true,
    text: 'Total Investment vs Total ROI over Years of Investment',
    fontSize: 20,
    fontColor: "white"
  },
    legend: {
      labels: {
        fontSize: 10,
        fontColor: 'white'
      }
    },
    style: {
      fontColor: "white"
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
            labelString: "Return on Investment (Millions)",
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
            labelString: "Years of Investment",
        }
      }]
  }
}

@Component({
  selector: 'c-cjs-bubble-chart',
  templateUrl: './c-cjs-bubble-chart.component.html',
  styleUrls: ['./c-cjs-bubble-chart.component.css']
})
export class CCjsBubbleChartComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {

    this.pushData();
    
    var chart = new Chart('myBubbleChart', {
        type: 'bubble',
        data: {
        datasets: [{
          data: dataset0,
          label: 'Brand A',
          backgroundColor: 'rgba(128, 0, 128, 0.5)',
          borderColor: 'rgb(128, 0, 128)',
          borderWidth: 2,
          datalabels: {
            color: 'white'
            } 
          },
          {
          data: dataset1,
          label: 'Brand B',
          backgroundColor: 'rgba(0,255,255,0.5)',
          borderColor: 'rgb(0,255,255)',
          borderWidth: 2,
          datalabels: {
            color: 'white'
            } 
          },
          {
          data: dataset2,
          label: 'Brand C',
          backgroundColor: 'rgb(255,140,0,0.5)',
          borderColor: 'rgb(255,140,0)',
          borderWidth: 2,
          datalabels: {
            color: 'white'
          } 
        }]},
      options: options
    });
  }

  

  pushData() {
    
  while(n < JSONData.length) {
          if(i == 1) {
            dataset0.push({x: JSONData[n].dimension_1, y: JSONData[n].measure_1, r: JSONData[n].measure_2});
          }
          else if(i == 2) {
            dataset1.push({x: JSONData[n].dimension_1, y: JSONData[n].measure_1, r: JSONData[n].measure_2});
          }
          else {
            dataset2.push({x: JSONData[n].dimension_1, y: JSONData[n].measure_1, r: JSONData[n].measure_2});
          }
        n++;
        i++;
        if(i > 3)
          i = 1;
      }
    }

}
