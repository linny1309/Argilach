import { Component, OnInit } from '@angular/core';
import {HostListener} from '@angular/core';
import { preserveWhitespacesDefault } from '@angular/compiler';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import * as ChartAnnotation from 'chartjs-plugin-annotation';
import { LiteralMapEntry } from '@angular/compiler/src/output/output_ast';
import { setUncaughtExceptionCaptureCallback } from 'process';
declare var $: any;

const JSONData = require("./json/data.json");
const Chart = require("chart.js");

var google = [];
var youtube = [];
var facebook = [];

var sequence0 = [0,3,6,9,12,15,18,21,24,27,30,33];
var sequence1 = [1,4,7,10,13,16,19,22,25,28,31,34];
var sequence2 = [2,5,8,11,14,17,20,23,26,29,32,35];

var year = JSONData[0].date.slice(4);
var monthNum = [];
var seasonNum = [];
var monthYear = [];

var labels0 = [];
var labels1 = [];
var labels2 = [];

var measures0 = [];
var measures1 = [];
var measures2 = [];

var winter = true;
var spring = true;
var summer = true;
var fall = true;

var mc;
var chart;

@Component({
  selector: 'c-cjs-line-chart',
  templateUrl: './c-cjs-line-chart.component.html',
  styleUrls: ['./c-cjs-line-chart.component.css'],
  host: {'(document:click)': 'onChange($event)'}
})
export class CCjsLineChartComponent implements OnInit {

  constructor() {     

  }

  ngOnInit(): void {

    chart = new Chart("myLineChart", {
      // The type of chart we want to create
      type: 'line',
      plugins: [ChartDataLabels, ChartAnnotation],
      // The data for our dataset
      data: {
        labels: monthYear,
          datasets: [{
              label: JSONData[0].dimension_1,
              backgroundColor: "rgba(0, 128, 0, 0.500)",
              hoverBackgroundColor: "rgb(0, 128, 0)",
              borderColor: "rgb(0, 128, 0)",
              borderWidth: 2,
              datalabels: {
                color: 'white'
              },
          }, {
              label: JSONData[1].dimension_1,
              backgroundColor: 'rgba(255, 41, 41, 0.459)',
              hoverBackgroundColor: "rgb(255, 41, 41)",
              borderColor: "rgb(255, 41, 41)",
              borderWidth: 2,
              datalabels: {
                color: 'white'
              },
          }, {
              label: JSONData[2].dimension_1,
              backgroundColor: 'rgba(0, 60, 255, 0.459)',
              hoverBackgroundColor: 'rgb(0, 60, 255)',
              borderColor: 'rgb(0, 60, 255)',
              borderWidth: 2,
              datalabels: {
                color: 'white',
              },
          }],
      },
      // Configuration options go here
      options: {
        annotation: {
          annotations: [
            {
              type: "line",
              mode: "vertical",
              scaleID: "x-axis-0",
              value: "Jan-20",
              borderColor: "orange",
              label: {
                enabled: true,
                position: "top"
              }
            },
            {
            type: "line",
            mode: "vertical",
            scaleID: "x-axis-0",
            value: "Break",
            borderColor: "purple",
            label: {
              enabled: true,
              position: "top"
            }
          },

          ]
        },
        title: {
          display: true,
          text: 'Paid Search Clicks per Hour by Website',
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
                labelString: "Paid Search Clicks per Hour (Thousands)",
            }
          }],
          xAxes: 
          [{
              ticks: {
                  fontColor: "white",
                  fontSize: 10,
                  beginAtZero: true,
              },
              scaleLabel: {
                fontColor: "white",
                display: true,
                fontSize: 10,
                labelString: "Month",
            }
          }]
      }
    }
  });

  this.makeMonthNum();

  }

  setChart() {
    
    var date = [];
    var tempNum = seasonNum;
    var sub = 0;
    var n = 0;

    for(n = 0; n < 12; n++) { 
      date.push(monthYear[n]);
      google.push(JSONData[sequence0[n]].measure_1);
      youtube.push(JSONData[sequence1[n]].measure_1);
      facebook.push(JSONData[sequence2[n]].measure_1);
    }

    var n = 0;

    var googleTemp = google;
    var youtubeTemp = youtube;
    var facebookTemp = facebook;

    if(!winter) {
      while(n <= date.length) {
        if(tempNum[n+sub] == 1) {
          date.splice(n+sub,1);
          tempNum.splice(n+sub,1);
          googleTemp.splice(n+sub,1);
          youtubeTemp.splice(n+sub,1);
          facebookTemp.splice(n+sub,1);
          sub--;
          if(n == date.length && sub == -2) {
            n--;
            sub+=1;
          }
        }
        n++;
      }
    }

    sub = 0;
    n = 0;

    if(!spring) {
      while(n <= date.length) {
        if(tempNum[n+sub] == 2) {
          date.splice(n+sub,1);
          tempNum.splice(n+sub,1);
          googleTemp.splice(n+sub,1);
          youtubeTemp.splice(n+sub,1);
          facebookTemp.splice(n+sub,1);
          sub--;
          if(n == date.length && sub == -2) {
            n--;
            sub+=1;
          }
        }
        if(n < date.length || tempNum[date.length] != 2)
          n++;
      }
    }

    sub = 0;
    n = 0;

    if(!summer) {
      while(n <= date.length) {
        if(tempNum[n+sub] == 3) {
          date.splice(n+sub,1);
          tempNum.splice(n+sub,1);
          googleTemp.splice(n+sub,1);
          youtubeTemp.splice(n+sub,1);
          facebookTemp.splice(n+sub,1);
          sub--;
          if(n == date.length && sub == -2) {
            n--;
            sub+=1;
          }
        }
        if(n < date.length || tempNum[date.length] != 3)
          n++;
      }
    }

    sub = 0;
    n = 0;

    if(!fall) {
      while(n <= date.length) {
        if(tempNum[n+sub] == 4) {
          date.splice(n+sub,1);
          tempNum.splice(n+sub,1);
          googleTemp.splice(n+sub,1);
          youtubeTemp.splice(n+sub,1);
          facebookTemp.splice(n+sub,1);
          sub--;
          if(n == date.length && sub == -2) {
            n--;
            sub+=1;
          }
        }
        if(n < date.length || tempNum[date.length] != 4)
          n++;
      }
    }

    n = 0;

    while(n < tempNum.length-1) {
      if(((Math.abs(tempNum[n+1] - tempNum[n]) > 1) && ((tempNum[n]+tempNum[n+1])/2 != 2.5)) || (tempNum[n+1] == 2 && tempNum[n] == 3)) {
        date.splice(n+1, 0, "Break");
        googleTemp.splice(n+1, 0, null);
        youtubeTemp.splice(n+1, 0, null);
        facebookTemp.splice(n+1, 0, null);
      }
      n++;
    }

    var x = 0;
    chart.data.labels = date;
    chart.data.datasets[0].data = googleTemp;
    chart.data.datasets[1].data = youtubeTemp;
    chart.data.datasets[2].data = facebookTemp;
    chart.update();

    /*
    
    chart.data.datasets.forEach((dataset) => {
      if (x == 0) {
        dataset.data = googleTemp;
      }
      else if (x == 1) {
        dataset.data = youtubeTemp;
      }
      else if(x == 2) {
        dataset.data = facebookTemp;
      }
      x++;
    });

    */
    

  }

  onChange(event) {

    google = [];
    youtube = [];
    facebook = [];

    if(event.target == "[object HTMLInputElement]") {
      if(event.target.id == "Winter")
        winter = !winter;
      else if (event.target.id == "Spring")
        spring = !spring;
      else if (event.target.id == "Summer")
        summer = !summer;
      else if (event.target.id == "Fall")
        fall = !fall;
      this.makeMonthNum();
    }
  }

  makeMonthNum() {
    monthNum = [];
    var labelColor = "white"; 
    var n;
    var month;

    for(n = 0; n < 12; n++) {
      if(n == 0) {
        month = this.findMonthNumStart(JSONData[0].date.substring(0,2));
        monthNum.push(month);
      }
      if(month == 13) {
        month = 1;
        year++;
        labelColor = "yellow";
        monthNum.push(month);
      }
      else if(n != 0)
      {
        monthNum.push(month);
      }
      monthYear.push(this.findMonthName(JSONData[sequence1[n]].date.substring(0,2)) + "-" + (year-2000));
      //chart.options.scales.xAxes.ticks.fontColor = labelColor;
      month++;
    }
    this.makeSeasonNum();
  }

  makeSeasonNum() {
    seasonNum = [];
    var n;
    for(n = 0; n < 12; n++) {
      if(monthNum[n] == 12 || monthNum[n] < 3)
        seasonNum.push(1);
      else if(monthNum[n] > 2 && monthNum[n] < 6)
        seasonNum.push(2);
      else if(monthNum[n] > 5 && monthNum[n] < 9)
        seasonNum.push(3);
      else if(monthNum[n] > 8 && monthNum[n] < 12)
        seasonNum.push(4);
    }
    this.setChart();
  }

  findMonthNumStart(date) {
    if(date == "1/")
      return 1;
    else if(date == "2/")
      return 2;
    else if(date == "3/")
      return 3;
    else if(date == "4/")
      return 4;
    else if(date == "5/")
      return 5;
    else if(date == "6/")
      return 6;
    else if(date == "7/")
      return 7;
    else if(date == "8/")
      return 8;
    else if(date == "9/")
      return 9;
    else if(date == "10")
      return 10;
    else if(date == "11")
      return 11;
    else
      return 12;
  }

  findMonthName(date) {
    if(date == "1/")
      return "Jan";
    else if(date == "2/")
      return "Feb";
    else if(date == "3/")
      return "Mar";
    else if(date == "4/")
      return "Apr";
    else if(date == "5/")
      return "May";
    else if(date == "6/")
      return "Jun";
    else if(date == "7/")
      return "Jul";
    else if(date == "8/")
      return "Aug";
    else if(date == "9/")
      return "Sep";
    else if(date == "10")
      return "Oct";
    else if(date == "11")
      return "Nov";
    else if(date == "12")
      return "Dec";
  }
}
