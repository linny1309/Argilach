import { Component, OnInit } from '@angular/core';
import { preserveWhitespacesDefault } from '@angular/compiler';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { bindCallback } from 'rxjs';
import { ɵangular_packages_platform_browser_dynamic_testing_testing_a } from '@angular/platform-browser-dynamic/testing';
import { MaxLengthValidator } from '@angular/forms';
import * as ChartAnnotation from 'chartjs-plugin-annotation';
import { LiteralMapEntry } from '@angular/compiler/src/output/output_ast';
import { setUncaughtExceptionCaptureCallback } from 'process';

const JSONData = require("./json/data.json");
var measures = [];
var curQMeasures = [];
var prevQMeasures = [];
var cur1Measure = 0;
var cur2Measure = 0;
var cur3Measure = 0;
var cur4Measure = 0;
var cur5Measure = 0;
var cur6Measure = 0;
var x;
var sum;

var tempData = JSONData;
const staticData = JSONData;
const Chart = require("chart.js");

var jsonLength = Object.keys(JSONData).length;
var finalData;
var kpiScore;
var kpiScorePrev

var mc;
var chart;
var ng = 0;

var qCount = 0;

var dimensions = ["male","female","A+","A-","B+","B-","AB+","AB-","O+","O-","stable","critical"];
var dimensionBool = [true,true,true,true,true,true,true,true,true,true,true,true]

var critical = true;
var stable = true;

var vp = document.getElementsByClassName("vs-net");
let vsNet = [300,-1,3,2,2.2,-5,4,16];

function initValues() {
  for(x = 0; x < Object.keys(JSONData).length; x++) {
    measures.push(JSONData[x].qty_ordered);
    if(JSONData[x].qtr === 1){
      cur1Measure+=curQMeasures[x];
    }
    else if (JSONData[x].qtr === 2){
      cur2Measure+=curQMeasures[x];
    }
    else if(JSONData[x].qtr === 3){
      cur3Measure+=curQMeasures[x];
    }
    else if (JSONData[x].qtr === 4){
      cur4Measure+=curQMeasures[x];
    }
    else if(JSONData[x].qtr === 5){
      prevQMeasures.push(JSONData[x].qty_ordered);
      cur5Measure+=prevQMeasures[x];
    }
    else if (JSONData[x].qtr === 6){
      curQMeasures.push(JSONData[x].qty_ordered);
      cur6Measure+=curQMeasures[x];
    }
  }
  sum = curQMeasures.reduce(function(a, b){
    return a + b;
  }, 0);

  var ks = document.getElementsByClassName("kpi-score");
  var obj = ks[0];
}

function mediaCheck(m) {
  if (m.matches) { // If media query matches
    mc = 0;
  } else {
    mc = 1;
  }
}

function setArrows(n) {
  var element = vp[0];

  if(n < 0) {
    element.innerHTML+= "&#9660;"
  }
  else if (n == 0) {
    element.innerHTML+= "";
  }
  else {
    element.innerHTML+= "&#9650";
  }
}

@Component({
  selector: 'c-cjs-gran-chart',
  templateUrl: './c-cjs-gran-chart.component.html',
  styleUrls: ['./c-cjs-gran-chart.component.css'],
  host: {'(document:click)': 'onChange($event)'}
})
export class CCjsGranChartComponent implements OnInit {

  constructor() { }

  checkBoxes() {
    var x = 0;
    var items = document.getElementsByClassName('check-box') as HTMLCollectionOf<HTMLInputElement>;
    for (var i = 0; i < items.length; i++) {
        for(x = 0; x < dimensions.length; x++) {
          if(items[i].id == dimensions[x]) {
            if (items[i].checked == true)
              dimensionBool[x] = true;
            else
              dimensionBool[x] = false;
          }
        }
    }
    console.log(dimensionBool)
  }

  onChange(event) {

    //this.checkBoxes();

    var n;
    var cur = 0;

    tempData = JSONData;

    for(n = 0; n < dimensions.length; n++) {
      if(event.target == "[object HTMLInputElement]") {
        if(event.target.id == dimensions[n]){
          dimensionBool[n] = !dimensionBool[n];
          cur = n;
        }
      }
      else if(event.target.id == "kpiDiv7" || event.target.id == "leftSpan8") {
        for(n = 0; n < dimensions.length; n++)
          dimensionBool[n] = true;
      }
    }

    console.log(dimensionBool);

    for(n = 0; n < dimensions.length; n++) {
      if(!dimensionBool[n]) {
        tempData = this.removeField(tempData,dimensions[n],n);
      }
      else {
        tempData = this.addField(tempData,dimensions[n],n);
      }
    }

    if((event.target == "[object HTMLInputElement]" || event.target.id == "leftSpan8" || event.target.id == "kpiDiv7") && event.target.id != "searchInput" && event.target.id != "pin") {
      if(event.target.id == "kpiDiv7" || event.target.id == "leftSpan8"){
        initValues();
        this.getMeasure(JSONData,event);
        console.log("HERE");
      }
      else if(event.target.id != "Spring" && event.target.id != "Summer" && event.target.id != "Fall" && event.target.id != "Winter" && event.target.id != "2016" && event.target.id != "2017" && event.target.id != "2018" && event.target.id != "2019" && event.target.id != "2020") {
        this.getMeasure(tempData,event);
        console.log("HERE2222222222222222222222");
      }
      console.log(event.target.id);
    }

  }

  getMeasure(td,event) {
    kpiScore = 0;
    var finalRawMeasure = [];
    var n = 0;
    var qMeasure = 0;
    for(n = 0; n < Object.keys(td).length; n++) {
      if(n > 0) {
        if(td[n-1].qtr == td[n].qtr && n < Object.keys(td).length - 1) {
          qMeasure+=td[n].qty_ordered;
          if(td[n].qtr == 6){
            kpiScore+=td[n].qty_ordered;
          }
          else if(td[n].qtr == 5){
            kpiScorePrev+=td[n].qty_ordered;
          }
        }
        else if(n < Object.keys(td).length - 1) {
          finalRawMeasure.push(qMeasure);
          qMeasure = td[n].qty_ordered;
          if(td[n].qtr == 6){
            kpiScore+=td[n].qty_ordered;
          }
          else if(td[n].qtr == 5){
            kpiScorePrev+=td[n].qty_ordered;
          }
        }
        else {
          qMeasure+=td[n].qty_ordered;
          finalRawMeasure.push(qMeasure);
          qMeasure = td[n].qty_ordered;
        }
        if(td[n].qtr == 6){
          kpiScore+=td[n].qty_ordered;
        }
        else if(td[n].qtr == 5){
          kpiScorePrev+=td[n].qty_ordered;
        }
      }
      else {
        qMeasure = td[n].qty_ordered;
        if(td[n].qtr == 6){
          kpiScore+=td[n].qty_ordered;
        }
        else if(td[n].qtr == 5){
          kpiScorePrev+=td[n].qty_ordered;
        }
      }
    }

        var vp = document.getElementsByClassName("vs-net") as HTMLCollectionOf<HTMLElement>;;
        var objP = vp[0];
        var ks = document.getElementsByClassName("kpi-score");
        var obj = ks[0];

        obj.innerHTML = finalRawMeasure[5] + " Quantity Ordered";
        objP.innerHTML = finalRawMeasure[5] - finalRawMeasure[4] + " Quantity Ordered vs PQ";

        if(finalRawMeasure[5] - finalRawMeasure[4] <= 0) {
          objP.style.backgroundColor = "red";
        }
        else {
          objP.style.backgroundColor = "green";
        }

        setArrows(finalRawMeasure[5] - finalRawMeasure[4]);

      chart.data.datasets[0].data = finalRawMeasure;
      chart.update();
      console.log("UPDATED");
    }


  getQuarter() {
    var quarters = [];
    var n;
    var qCount = tempData[tempData.length - 1].qtr;
    for(let n in tempData) {
      if (tempData[n].qtr < qCount+1) {
        qCount--;
        quarters.push(tempData[n].qtr);
      }
    }
    qCount = tempData[tempData.length - 1].qtr;
    n = 0;
    if(quarters.length < 13) {
        for(n = 0; n < qCount; n++) {
          quarters.push(tempData[n].qtr);
          chart.data.labels.push(n+1);
        }
      }
      else {
        quarters.slice(quarters.length - 13 ,quarters.length);
        for(n = quarters.length - 13; n < quarters.length; n++) {
          chart.data.labels.push(quarters[n]);
        }
      }
  }

  removeField(td,str,x) {
    var inc = 0;
    for(let n in td) {
      if ((td[n].patient_gender == str && x < 2) || (td[n].blood_type == str && x > 1)  ||  (td[n].patient_status == str && x > 9)) {
        td[n].qty_ordered = 0;
        if(td[n].qtr == 6) {
          curQMeasures[inc] = 0;
          inc++;
        }
      }
    }
    return td;
  }

  addField(td,str,x) {
    var inc = 0;
    for(let n in td) {
      if ((td[n].patient_gender == str && x < 2) || (td[n].blood_type == str && x > 1 && x < 10 && x < 10 && td[n].qty_ordered != 0)  ||  (td[n].patient_status == str && x > 9 && x < 10 && td[n].qty_ordered != 0)) {
        td[n].qty_ordered = measures[n];
        if(td[n].qtr == 6) {
          curQMeasures[inc] = measures[n];
          inc++;
        }
      }
    }
    return td;
  }

  ngOnInit(): void {

    initValues();

    chart = new Chart('myGranChart', {
      // The type of chart we want to create
      type: 'bar',
      plugins: [ChartDataLabels],
      // The data for our dataset
      data: {
          labels: [],
          datasets: [{
              label: "Quantity Ordered",
              backgroundColor: "rgba(0, 51, 25, 0.5)",
              hoverBackgroundColor: "rgb(0, 51, 25)",
              borderColor: "rgb(0, 51, 25)",
              borderWidth: 2,
              datalabels: {
                color: 'white'
              },
          }],
      },
      // Configuration options go here
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Quantity Ordered',
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
              labelString: "Quantity Ordered",
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
              labelString: "Quarter",
          }
        }]
    }
    }
  });


  this.getQuarter();
  this.getMeasure(tempData,'');

}
  

  }

