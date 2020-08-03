import { Component, OnInit } from '@angular/core';
import { preserveWhitespacesDefault } from '@angular/compiler';

const Chart = require("chart.js");

@Component({
  selector: 'c-cjs-scatter-plot',
  templateUrl: './c-cjs-scatter-plot.component.html',
  styleUrls: ['./c-cjs-scatter-plot.component.css']
})
export class CCjsScatterPlotComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var chart = new Chart("myScatterPlot", {
      type: 'scatter',
      data: {
          datasets: [{
              label: "Brand A",
              borderColor: "yellow",
              backgroundColor: "rgba(255, 255, 0, 0.5)",
              data: [{ x: 1, y: 27}, { x: 2, y: 26}, { x: 2, y: 28 }, {x: 4, y: 50}, { x: 3, y: 34}, { x: 5, y: 57}, { x: 4, y: 45 }, {x: 5, y:50}, { x: 4, y:45}, { x: 3, y: 30}, { x: 4, y: 32 }, {x: 2, y: 20}, { x: 1, y: 27}, { x: 2, y: 29 }, {x: 3, y: 40}, { x: 3, y: 34}, { x: 4, y: 43}, { x: 3, y: 34 }, {x: 3, y: 45}, { x: 6, y: 56}, { x: 6, y: 62}, { x: 7, y: 67 }, {x: 7, y: 62}, { x: 8, y: 60}, { x: 8, y: 57}, { x: 8, y: 70 }, {x: 9, y:78}, { x: 9, y:67}, { x: 3, y: 30}, { x: 2, y: 32 }, {x: 2, y: 20}, { x: 6, y: 76}, { x: 9, y: 90 }, {x: 3, y: 40}, { x: 3, y: 34}, { x: 4, y: 43}, { x: 3, y: 34 }, {x: 3, y: 45}],
              datalabels: {
                display: false
              } 
          }]
      },
      options: {
        title: {
          display: true,
          text: 'Number of Orders vs Age',
          fontSize: 20
        },
          scales: {
              xAxes: [{
                scaleLabel: {
                  fontColor: "white",
                  display: true,
                  fontSize: 10,
                  labelString: "Number of Orders",
                }
              }],
              yAxes: [{
                scaleLabel: {
                  fontColor: "white",
                  display: true,
                  fontSize: 10,
                  labelString: "Patient Age",
              }}
              ,],
              type: 'linear',
              position: 'bottom'
          }
      }
  });

  }

}
