import { Component, OnInit } from '@angular/core';
import { preserveWhitespacesDefault } from '@angular/compiler';

const Chart = require("chart.js");

var options = {
  scaleFontColor: "white",
  labelColor: 'white',
  title: {
    display: true,
    text: 'Brand A Market Share',
    fontSize: 20
  },
  scales: {
        scaleLabel: {
          fontColor: "white",
      }
  }
  };

var data = {
  labels: ["A","B","C"],
  color: "white",
  fontColor: 'white',
  scaleFontColor: "white",
  datasets: [{
    scaleFontColor: "white",
    backgroundColor: ["rgb(62, 149, 205,0.5)", "rgb(142,94,162,0.5)","rgb(60,186,159,0.5)"],
    borderColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
    color: "white",
    data: [46,22,32],
    datalabels: {
      color: 'white'
    } 
  }]
};

@Component({
  selector: 'c-cjs-pie-chart',
  templateUrl: './c-cjs-pie-chart.component.html',
  styleUrls: ['./c-cjs-pie-chart.component.css']
})


export class CCjsPieChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var chart = new Chart("myPieChart", {
      type: 'pie',
      data: data,
      options: options
    });

    Chart.defaults.global.defaultFontColor = 'white';

}
}


