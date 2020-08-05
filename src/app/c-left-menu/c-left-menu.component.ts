import { Component, OnInit, ɵɵresolveBody } from '@angular/core';

var n = 0;
var ng = 0;
var eg;
var mc;
var visual = "chart0";

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

var ks = document.getElementsByClassName("kpi-score");
var kt = document.getElementsByClassName("kpi-title");
var vp = document.getElementsByClassName("vs-net");
var ki = document.querySelectorAll("#kpiIcon");
var kso = document.querySelectorAll("#kpiSource");
var kd = document.querySelectorAll("#kpiDate");
var breakFunc = false;

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

function checkHidden() {
  var hiddenCheck = document.getElementById("auto") as HTMLInputElement;
  if(hiddenCheck.checked == true) {
    hiddenCheck.checked = false;
  }
  else {
    hiddenCheck.checked = true;
  }
  console.log(hiddenCheck.checked);
}

function topFunction() {
  document.documentElement.scrollTop = 0;
}

function breakFunction() {
  breakFunc = true
}

function isOverlap(idOne,idTwo){
  var objOne=$(idOne),
      objTwo=$(idTwo),
      offsetOne = objOne.offset(),
      offsetTwo = objTwo.offset(),
      topOne=offsetOne.top,
      topTwo=offsetTwo.top,
      leftOne=offsetOne.left,
      leftTwo=offsetTwo.left,
      widthOne = objOne.width(),
      widthTwo = objTwo.width(),
      heightOne = objOne.height(),
      heightTwo = objTwo.height();
  var leftTop = leftTwo > leftOne && leftTwo < leftOne+widthOne && topTwo > topOne && topTwo < topOne+heightOne, rightTop = leftTwo+widthTwo > leftOne && leftTwo+widthTwo < leftOne+widthOne                  && topTwo > topOne && topTwo < topOne+heightOne,             leftBottom = leftTwo > leftOne && leftTwo < leftOne+widthOne                  && topTwo+heightTwo > topOne && topTwo+heightTwo < topOne+heightOne,             rightBottom = leftTwo+widthTwo > leftOne && leftTwo+widthTwo < leftOne+widthOne                  && topTwo+heightTwo > topOne && topTwo+heightTwo < topOne+heightOne;
  return leftTop || rightTop || leftBottom || rightBottom;
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

function setIcons(n) {
  document.getElementById("leftIcon"+n).innerHTML = icons[n];
}

function setPageTitleJS(entry) {
  entry+=1;
  document.getElementById("pageTitle").innerHTML = titles[entry];
  document.getElementById("pageIcon").innerHTML = icons[entry];
}

function setVisualJS(n) {
  var i;

  for(i = 0; i < 8; i++) {
      document.getElementById("chart"+i).style.visibility = "hidden"
  }

  document.getElementById("chart"+n).style.visibility = "visible";
  document.getElementById("chart"+n).style.display = "block";
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

function setArrows() {
  var element = vp[0];

  if(vsNet[ng] < 0) {
    element.innerHTML+= "&#9660;"
  }
  else {
    element.innerHTML+= "&#9650";
  }
}

function setGrayJS() {

  var x;
  var element;
  for(x = 0; x < 8; x++) {
    element = vp[x];
    element.style.backgroundColor = "gray";
    }
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

function setPageColor() {
  var element;
  element = vp[0];

    if(vsNet[eg] < 0) {
      element.style.backgroundColor = "red";
    }
    else {
      element.style.backgroundColor = "green";
    }
}

@Component({
  selector: 'c-left-menu',
  templateUrl: './c-left-menu.component.html',
  styleUrls: ['./c-left-menu.component.css']
})

export class CLeftMenuComponent implements OnInit {

  constructor() { }

  mediaCheck(m) {
    if (m.matches) { // If media query matches
      mc = 0;
    } else {
      mc = 1
    }
  }

  openSearchMenu() {
    document.getElementById("cLeftMenu").style.opacity = "0";
    document.getElementById("cLeftMenu").style.visibility = "hidden";
    document.getElementById("cSearch").style.visibility = "visible";
    document.getElementById("cSearch").style.opacity = "1";
    document.getElementById("cSearch").style.display = "flex";
    document.getElementById("cSearch").style.zIndex = "30";
  }

  setPageTS(entry) {
    var search = document.getElementById("searchInput") as HTMLInputElement;
    search.value = "";
    document.getElementById("kpiDiv0").style.display = "";
    checkBoxes();
    topFunction();
    filterFunction(entry);
    document.getElementById("pixelAlertText").style.display = "block";
    document.getElementById("content").style.overflow = "none";
    document.getElementById("chartContainer").style.visibility = "visible";
    document.getElementById("topKpi").style.pointerEvents = 'none';
    document.getElementById("topCat").style.display = "none";
    document.getElementById("topKpi").style.position = "fixed";
    document.getElementById("topKpi").style.width = "99%";
    //scrollTo("descContainer" ,0, 0);
    document.getElementById("pixelAlert").style.display = "block";
    var m;
    var element;
    element = vp[0];
    element.innerHTML = "";
    setGrayJS();
    animateValue(entry,0, kpiScore[entry], 1);
    document.getElementById("subKpi").style.visibility = "hidden";
    document.getElementById("subKpi").style.display = "none";
    setPageTitleJS(entry);
    setKPICardJS(entry);
    var final = kpiScore[entry];
    var finalInt = final.toFixed(1);
    setVisualJS(entry);
    eg = entry;
    setTimeout(setPageColor, 300);
    if(entry == 7) {
      checkHidden();
    }

    m = window.matchMedia("(max-width: 1000px)")
    this.mediaCheck(m); // Call listener function at run time

    var overlap = isOverlap("#cComment","#visualPadding");

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
    document.getElementById("topCat").style.display = "block";
    document.getElementById("topKpi").style.position = "relative";
    document.getElementById("pixelAlert").style.display = "none";

    var element;
    var x;
    var m;

    setGrayJS();
    document.getElementById("subKpi").style.visibility = "visible";
    document.getElementById("subKpi").style.display = "block";
    document.getElementById("pageTitle").innerHTML = "Key KPIs";
    document.getElementById("pageIcon").innerHTML = "score";

    m = window.matchMedia("(max-width: 1000px)")
    this.mediaCheck(m); // Call listener function at run time

    setKPICardJS(0);

    for(x = 0; x < 8; x++)
    {
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

  ngOnInit(): void {

    filterFunction(null);

    let titles = [ 
                "Key KPIs",
                "Bar Chart",
                "Line Chart",
                "Pie Chart",
                "Bubble Chart",
                "Scatter Plot",
                "Radar Chart",
                "Combo Chart",
                "Gran Chart"
              ]

    for(let entry of titles) {

      var titleDiv = document.getElementById("leftDiv"+n);

      setIcons(n);
      var c = document.createElement("span");
      c.id = "leftSpan"+n;
      var br = document.createElement('br');
      var div = document.createElement('div');
      c.innerHTML = entry;
      c.setAttribute('style', 
      `
          position: absolute;
          width: 200px;
          font-size: 1vh; 
          font-family: Arial, Helvetica, sans-serif;
          color: color: rgb(27, 27, 27);;
          cursor: pointer;
          font-size: 15px;
          margin-top: .2em;
          font-weight: bold;
          -webkit-touch-callout: none; /* iOS Safari */
          -webkit-user-select: none; /* Safari */
           -khtml-user-select: none; /* Konqueror HTML */
             -moz-user-select: none; /* Old versions of Firefox */
              -ms-user-select: none; /* Internet Explorer/Edge */
                  user-select: none; /* Non-prefixed version, currently
                                        supported by Chrome, Edge, Opera and Firefox */
      `
      );
      titleDiv.appendChild(c);
      n++;
    }
  }
}
