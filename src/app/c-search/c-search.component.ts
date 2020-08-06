import { Component, OnInit } from '@angular/core';

var n = 0;
var ng = 0;
var eg;
var mc;
var visual = "chart0";
var vp = document.getElementsByClassName("vs-net");

let kpiTitle = ["Paid Clicks by Application Type","Paid Search Clicks per Hour by Website","Brand A Market Share","Investment vs ROI / Yrs of Investment","Orders per Customer","Positive Customer Experiences","Bulk Orders Placed","Quantity Ordered"];
let kpiMeasure = ["Clicks","Clicks","","ROI","Orders","Customers","Bulk Orders","Quantity Ordered"]
let kpiScore = [909,6,46,33.0,3.2,41,49,126];
let vsNet = [300,-1,3,2,2.2,-5,4,16];
let vsNetLabel = ["vs PW","vs PM","","vs PY","vs PY","vs PY","vs PQ","vs PQ"];
let numAbr = ["K","K","%","M","","","",""];
let icons = ["score","bar_chart","show_chart","pie_chart","bubble_chart","scatter_plot","leak_add","multiline_chart","bar_chart"];
let kpiIcons = ["bar_chart","show_chart","pie_chart","bubble_chart","scatter_plot","leak_add","multiline_chart","bar_chart"];
let titles = ["Key KPIs","Bar Chart","Line Chart","Pie Chart","Bubble Chart","Scatter Plot","Radar Chart","Combo Chart","Gran Chart"];
let kpiSource = ["IPSOS","NeoGenomics","Adobe Analytics","Google Analytics","Vantage","SP","IPSOS","SP"];
let kpiDate = ["6/7/20","May-20","5/31/20","6/1/20","6/1/20","1/1/20","Q4","Q6"]; 
var time = 0;
var categoryCadance = [2,4,7,8]; //Cadence for category changes
var categoryCount = [2,2,3,1]; //Count for categories
var categoryID = ["cat0","cat1","cat2","cat3"];
var category = ["Digital KPIs","Brand Performance","Customer Dynamics","Brand Transaction"];

var n = 0;
var kt = document.getElementsByClassName("kpi-title");
var ks = document.getElementsByClassName("kpi-score");
var vp = document.getElementsByClassName("vs-net");
var ki = document.querySelectorAll("#kpiIcon");
var kso = document.querySelectorAll("#kpiSource");
var kd = document.querySelectorAll("#kpiDate");

function filterCategories(kpiState,input) {
  console.log(kpiState);
  var n = 0;
  var total = 0;
  for(var x = 0; x <= kpiState.length; x++) {
      if(x == categoryCadance[n]) {
        if(total == 0) {
          document.getElementById(categoryID[n]).style.display = "none";
        }
        else{
          document.getElementById(categoryID[n]).style.display = "";
        }
        n++;
        total = kpiState[x];
      }
      else {
        total+=kpiState[x];
      }
  }
  filterByCategory(input);
}

function filterByCategory(input) {
  var n = 0;
  var x = 0;
  var count = 0;
  for(n = 0; n < categoryCount.length; n++) {
    if(category[n].toUpperCase().indexOf(input) > -1) {
        document.getElementById(categoryID[n]).style.display = "";
        while(x < categoryCadance[n]) {
          document.getElementById("kpiDiv"+x).style.display = "";
          x++;
        }
      }
      else 
        while(x < categoryCadance[n]) {
          x++;
        }
    }
}

function animateValue(entry,start, end, type) {
  var range = end - start;
  var current = start;
  var increment = end > start? (end/1) : (end/1);
  var stepTime = 10;
  var timer = setInterval(function() {
  current += increment;
  var decimal = kpiScore[entry] - Math.trunc(kpiScore[entry]);
  if(type == 1)
      ks[0].innerHTML = current.toFixed(1) + numAbr[entry] + " " + kpiMeasure[entry];
  else 
    ks[entry].innerHTML = current.toFixed(1) + numAbr[entry] + " " + kpiMeasure[entry];
  var final = parseInt(current) + decimal;
  if (current >= end) {
    if(type == 1)
        ks[0].innerHTML = kpiScore[entry] + numAbr[entry] + " " + kpiMeasure[entry];
    else if(type == 2)
        ks[0].innerHTML = kpiScore[0] + numAbr[entry] + " " + kpiMeasure[entry];
    else
      ks[entry].innerHTML = kpiScore[entry] + numAbr[entry] + " " + kpiMeasure[entry];
      document.getElementById("pixelAlert").innerHTML = kpiScore[entry] + numAbr[entry] + " " + kpiMeasure[entry];
    clearInterval(timer);
  }
  }, stepTime);
}

function setLandingColor() {
  for(x = 0; x < 8; x++) {
    var first = 0;
    var x;
    var element;

    if(x == 0)
      first = 2;
    else 
      first = 0;
    kt[x].innerHTML = kpiTitle[x];
    animateValue(x, 0, kpiScore[x], first);

    element = vp[x];

    if(vsNet[x] <= 0) {
      element.style.backgroundColor = "red";
    }
    else {
      element.style.backgroundColor = "green";
    }
  }
}

function setArrows() {
  var element = vp[0];

  if(vsNet[ng] < 0) {
    element.innerHTML+= "&#9660;"
  }
  else {
    element.innerHTML+= "&#9650";
  }
}

function setKPICardJS(n) { 
  var element = vp[0];
  element.innerHTML = "";
  document.getElementById("kpiIcon").innerHTML = icons[n+1];
  document.getElementById("kpiTitle").innerHTML = kpiTitle[n];
  document.getElementById("vsNet").innerHTML = vsNet[n] + numAbr[n] + " " + kpiMeasure[n]+ " " + vsNetLabel[n];
  document.getElementById("kpiSource").innerHTML = "Source: "+ kpiSource[n];
  document.getElementById("kpiDate").innerHTML = "Date: "+ kpiDate[n];
  ng = n;
  setArrows();
}

function topFunction() {
  document.documentElement.scrollTop = 0;
}

function checkBoxes() {
  var items = document.getElementsByClassName('check-box') as HTMLCollectionOf<HTMLInputElement>;
  for (var i = 0; i < items.length; i++) {
      if(items[i].id !="Winter" && items[i].id !="Spring" && items[i].id !="Summer" && items[i].id !="Fall" && items[i].id !="2016" && items[i].id !="2017" && items[i].id !="2018" && items[i].id !="2019" && items[i].id !="2020" )
        items[i].checked = true;
  }
}

function filterFunction(entry) {
  document.getElementById("qFilter").style.display = "none";
  document.getElementById("yearFilter").style.display = "none";
  document.getElementById("granFilter").style.display = "none";
  document.getElementById("noFilter").style.display = "none";
  if(entry == 1)
    document.getElementById("qFilter").style.display = "block";
  if(entry == 2)
    document.getElementById("yearFilter").style.display = "block";
  if(entry == 7)
    document.getElementById("granFilter").style.display = "block";
  else if(entry != 1 && entry !=2 && entry !=7)
    document.getElementById("noFilter").style.display = "block";
}

@Component({
  selector: 'c-search',
  templateUrl: './c-search.component.html',
  styleUrls: ['./c-search.component.css']
})

export class CSearchComponent implements OnInit {

  constructor() { }

  search() {
    var kpiState = [1,1,1,1,1,1,1,1];
    this.setLandingPageTS();
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    for (i = 0; i < 8; i++) {
        a = kpiTitle[i];
        if (a.toUpperCase().indexOf(filter) > -1) {
            document.getElementById("kpiDiv"+i).style.display = "";
        } else {
            document.getElementById("kpiDiv"+i).style.display = "none";
            kpiState[i]--;
        }
    }
    filterCategories(kpiState,filter);
  }

  mediaCheck(m) {
    if (m.matches) { // If media query matches
      mc = 0;
    } else {
      mc = 1
    }
  }

  setLandingPageTS() {
    checkBoxes();
    topFunction();
    filterFunction(null);
    document.getElementById("pixelAlertText").style.display = "none";
    document.getElementById("content").style.overflow = "scroll";
    document.getElementById("chartContainer").style.visibility = "hidden";
    document.getElementById("topKpi").style.width = "100%";
    document.getElementById("topKpi").style.pointerEvents = 'auto';
    document.getElementById("cat0").style.display = "block";
    document.getElementById("topKpi").style.position = "relative";
    document.getElementById("pixelAlert").style.display = "none";

    var element;
    var x;
    var m;

    document.getElementById("subKpi").style.visibility = "visible";
    document.getElementById("subKpi").style.display = "block";
    document.getElementById("pageTitle").innerHTML = "Key KPIs";
    document.getElementById("pageIcon").innerHTML = "score";

    m = window.matchMedia("(max-width: 1000px)")
    this.mediaCheck(m); // Call listener function at run time

    setKPICardJS(0);

    for(x = 0; x < 8; x++) {
        document.getElementById("chart"+x).style.visibility = "hidden";
    }
    if(mc == 0)
    {
      document.getElementById("arrowIcon").style.visibility = "visible";
    }
    else {
      document.getElementById("arrowIcon").style.visibility = "hidden";
    }
    setTimeout(setLandingColor, 300);
  }

  closeSearchMenu() {
    document.getElementById("cSearch").style.opacity = "0";
    document.getElementById("cSearch").style.visibility = "hidden";
  }

  ngOnInit(): void {
  }

}
