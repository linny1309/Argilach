import { Component, OnInit } from '@angular/core';
import { BrowserStack } from 'protractor/built/driverProviders';

var ks = document.getElementsByClassName("kpi-score");
var breakFunc = false;

let kpiTitle = ["Paid Clicks by Application Type","Paid Search Clicks per Hour by Website","Brand A Market Share","Investment vs ROI / Yrs of Investment","Orders per Customer","Positive Customer Experiences","Bulk Orders Placed","Quantity Ordered"];
let kpiMeasure = ["Clicks","Clicks","","ROI","Orders","Customers","Bulk Orders","Quantity Ordered"]
let kpiScore = [909,6,46,33.0,3.2,41,49,126];
let vsNet = [300,-1,3,2,2.2,-5,4,16];
let vsNetLabel = ["PW","PM","PY","PY","PY","PY","PQ","PQ"];
let numAbr = ["K","K","%","M","","","",""];
let icons = ["score","bar_chart","show_chart","pie_chart","bubble_chart","scatter_plot","leak_add","multiline_chart","bar_chart"];
let kpiIcons = ["bar_chart","show_chart","pie_chart","bubble_chart","scatter_plot","leak_add","multiline_chart","bar_chart"];
let titles = ["Key KPIs","Bar Chart","Line Chart","Pie Chart","Bubble Chart","Scatter Plot","Radar Chart","Combo Chart","Gran Chart"];
let kpiSource = ["IPSOS","NeoGenomics","Adobe Analytics","Google Analytics","Vantage","SP","IPSOS","SP"];
let kpiDate = ["6/7/20","May-20","5/31/20","6/1/20","6/1/20","1/1/20","Q4","Q6"]; 

function breakFunction() {
  breakFunc = true
}

function animateValue(inc, start, end) {
            var range = end - start;
            var current = start;
            var increment = end > start? (end/1) : (end/1);
            var stepTime = .0000000001;
            var obj = ks[inc];
            var timer = setInterval(function() {
              current += increment;
              var decimal = kpiScore[inc] - Math.trunc(kpiScore[inc]);
              obj.innerHTML = current.toFixed(1) + numAbr[inc] + " " + kpiMeasure[inc];
              var final = parseInt(current) + decimal;
              if (current >= end) {
                  obj.innerHTML = kpiScore[inc] + numAbr[inc] + " " + kpiMeasure[inc];
                  clearInterval(timer);
              }
          }, stepTime);
}

@Component({
  selector: 'c-kpi-card',
  templateUrl: './c-kpi-card.component.html',
  styleUrls: ['./c-kpi-card.component.css']
})

export class CKpiCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var x = 0;
    var y = 0;

    var kt = document.getElementsByClassName("kpi-title");
    var vp = document.getElementsByClassName("vs-net");
    var ki = document.querySelectorAll("#kpiIcon");
    var kso = document.querySelectorAll("#kpiSource");
    var kd = document.querySelectorAll("#kpiDate");

    var element;

    for(x = 0; x < 8; x++) {
      kt[x].innerHTML = kpiTitle[x];
      animateValue(x, 0, kpiScore[x]);
      ks[x].innerHTML = kpiScore[x] + numAbr[x] + " " + kpiMeasure[x];
      vp[x].innerHTML = vsNet[x] + numAbr[x] + " " + kpiMeasure[x]+ " vs " + vsNetLabel[x];
      ki[x].innerHTML = kpiIcons[x];
      kso[x].innerHTML = "Source: " + kpiSource[x];
      kd[x].innerHTML = "Date: " + kpiDate[x];
      
      element = vp[x];

      if(vsNet[x] <= 0) {
        element.style.backgroundColor = "red";
        vp[x].innerHTML+="&#9660;"
      }
      else {
        element.style.backgroundColor = "green";
        vp[x].innerHTML+="&#9650";
      }
    }
  }
}
