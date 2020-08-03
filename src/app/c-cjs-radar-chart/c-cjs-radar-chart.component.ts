import { Component, OnInit } from '@angular/core';
import { preserveWhitespacesDefault } from '@angular/compiler';

const Chart = require("chart.js");

var data = {
  labels: ['Calm', 'Social', 'Energetic', 'Private'],
  datasets: [{
      label: "Brand A",
      data: [21, 41, 47, 23],
      backgroundColor: 'rgba(0,255,0,0.5)',
      borderColor: 'rgb(0,255,0)',
  },
  {
      label: "Brand B",
      data: [29, 32, 10, 42],
      backgroundColor: 'rgba(255,165,0,0.5)',
      borderColor: 'orange',
  },
  {
      label: "Brand C",
      data: [21, 21, 20, 38],
      backgroundColor: 'rgba(0,128,128,0.5)',
      borderColor: 'rgb(0,128,128)',
  }]
};

var options = {
  title: {
    display: true,
    text: 'Customer Behavior Spectrum',
    fontSize: 20
  },
  scale: {
      angleLines: {
          display: true
      },
      ticks: {
          suggestedMin: 0,
          suggestedMax: 50,
          backdropColor: "rgba(0, 0, 0, 0)",
          fontColor: "gray"
      }
  }
};

@Component({
  selector: 'c-cjs-radar-chart',
  templateUrl: './c-cjs-radar-chart.component.html',
  styleUrls: ['./c-cjs-radar-chart.component.css']
})
export class CCjsRadarChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var chart = new Chart("myRadarChart", {
      type: 'radar',
      data: data,
      options: options
    });

  }

}
