import { Component, OnInit } from '@angular/core';

var elem = document.getElementById("body");
var n = 0;
var visual = "chart0";
var m;
var mc;

let icons = [ 
              "score",
              "insert_chart",
              "show_chart",
              "pie_chart",
              "bubble_chart",
              "scatter_plot",
              "score",
              "leak_add",
              "multiline_chart"
            ];

let titles =  [ 
                "Key KPIs",
                "Bar Chart",
                "Line Chart",
                "Pie Chart",
                "Bubble Chart",
                "Scatter Plot",
                "KPI Scores",
                "Radar Chart",
                "Multi Chart",
            ];

/* When the openFullscreen() function is executed, open the video in fullscreen.
Note that we must include prefixes for different browsers, as they don't support the requestFullscreen method yet */
function toggleFullscreenJS() {
  if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen(); 
    }
  }
}

function changeNavJS() {
  if(document.getElementById("cLeftMenu").style.visibility == "visible") {
    document.getElementById("cLeftMenu").style.opacity = "0";
    document.getElementById("cLeftMenu").style.visibility = "hidden";
  }
  else {
    document.getElementById("cLeftMenu").style.opacity = "1";
    document.getElementById("cLeftMenu").style.visibility = "visible";
  }
}

function toggleRightMenuJS() {
  if(document.getElementById("cRightMenu").style.visibility == "visible") {
    document.getElementById("cRightMenu").style.opacity = "0";
    document.getElementById("cRightMenu").style.visibility = "hidden";
  }
  else {
    document.getElementById("cRightMenu").style.opacity = "1";
    document.getElementById("cRightMenu").style.visibility = "visible";
  }
}

function toggleFilterMenuJS() {
  if(document.getElementById("cFilterMenu").style.visibility == "visible") {
    document.getElementById("cFilterMenu").style.opacity = "0";
    document.getElementById("cFilterMenu").style.visibility = "hidden";
  }
  else {
    document.getElementById("cFilterMenu").style.opacity = "1";
    document.getElementById("cFilterMenu").style.visibility = "visible";
  }
}

function mediaCheck(m) {
  if (m.matches) { // If media query matches
    mc = 0;
  } else {
    mc = 1
  }
}

@Component({
  selector: 'c-top-bar',
  templateUrl: './c-top-bar.component.html',
  styleUrls: ['./c-top-bar.component.css']
})

export class CTopBarComponent implements OnInit {

  constructor() { }

  changeNavTS() {
    changeNavJS();
  }

  ngOnInit(): void {
    document.getElementById("pageIcon").innerHTML = icons[0];
    document.getElementById("pageTitle").innerHTML = titles[0];
  }

  toggleFullscreenTS() {
    document.getElementById("cComment").style.visibility = "visible";
    toggleFullscreenJS();
  }
  
  toggleRightMenuTS() {
    if(document.getElementById("cFilterMenu").style.visibility == "visible") {
      toggleFilterMenuJS();
    }
    document.getElementById("mobileI").innerHTML = "settings";
    toggleRightMenuJS();
  }

  toggleFilterMenuTS() {
    if(document.getElementById("cRightMenu").style.visibility == "visible") {
      toggleRightMenuJS();
    }
    document.getElementById("mobileI").innerHTML = "reply";
    toggleFilterMenuJS();
  }

}
