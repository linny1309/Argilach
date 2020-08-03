import { Component, OnInit, ɵɵresolveBody } from '@angular/core';

var n = 0;
var tableVisual = false;

let icons = ["info","iso","today","refresh","get_app","picture_as_pdf","tune","fullscreen","table_view"];
let titles = [ "Key KPIs","Bar Chart","Line Chart","Pie Chart","Bubble Chart","Scatter Plot","Radar Chart","Combo Chart"];

function topFunction() {
  document.documentElement.scrollTop = 0;
}

/* When the openFullscreen() function is executed, open the video in fullscreen.
Note that we must include prefixes for different browsers, as they don't support the requestFullscreen method yet */

function toggleFullscreenJS(n) {
  if (!document.fullscreenElement && n != 1) {
      document.documentElement.requestFullscreen();
  } 
  else if(n == 1)
    document.documentElement.requestFullscreen()
  else {
    if (document.exitFullscreen) {
      document.exitFullscreen(); 
    }
  }
  if(n == 1) {
    window.print();
  }
}

function toggleVisualsJS() {
  var x = 0
  if(tableVisual == false) {
    for(x = 0; x < 6; x++) {
      document.getElementById("chart"+x).style.display= "none";
    }
  }
  else {
    for(x = 0; x < 6; x++) {
      document.getElementById("chart"+x).style.display = "block";
    }
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

@Component({
  selector: 'c-right-menu',
  templateUrl: './c-right-menu.component.html',
  styleUrls: ['./c-right-menu.component.css']
})
export class CRightMenuComponent implements OnInit {

  constructor() { }

  print() {
    window.print();
  }

  reloadData() {
    var url = window.location.href.substring(0, window.location.href.length - 9)

    location.replace(url);
  }

  setIcons(n) {
    document.getElementById("rightIcon"+n).innerHTML = icons[n];
  }

  ngOnInit(): void {

    let titles = [ 
                "Overview",
                "Calculator",
                "Calendar",
                "Reload Data",
                "Download Data",
                "Print to PDF",
                "Filters",
                "FS (And, Web)",
                "Visual to Table"
              ]

    for(let entry of titles) {

      var titleDiv = document.getElementById("rightDiv"+n);

      this.setIcons(n);
      var c = document.createElement("span");
      c.id = "rightSpan"+n;
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
          margin-left: 1vh;
          margin-top: 1.3vh;
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

  toggleTableVisualTS() {
    topFunction();
    if(tableVisual == false) {
      toggleVisualsJS();
      document.getElementById("topKpi").style.visibility = "hidden";
      document.getElementById("content").style.visibility = "hidden";
      document.getElementById("chartContainer").style.display = "none";
      document.getElementById("kpiBody").style.display = "none";
      document.getElementById("genTable").style.visibility = "visible";
      document.getElementById("pixelAlertContainer").style.display = "none";
      document.getElementById("cComment").style.display = "none";
    }
    else {
      toggleVisualsJS();
      document.getElementById("topKpi").style.visibility = "visible";
      document.getElementById("content").style.visibility = "visible";
      document.getElementById("chartContainer").style.display = "block";
      document.getElementById("kpiBody").style.display = "block";
      document.getElementById("genTable").style.visibility = "hidden";
      document.getElementById("pixelAlertContainer").style.display = "block";
      document.getElementById("cComment").style.display = "block";
    }
    tableVisual = !tableVisual; 
  }

  toggleFullscreenTS(n) {
    document.getElementById("cComment").style.visibility = "visible";
    toggleFullscreenJS(n);
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

  toggleElement(id) {
    if(document.getElementById(id).style.visibility == "visible") {
      document.getElementById(id).style.opacity = "0";
      document.getElementById(id).style.visibility = "hidden";
    }
    else {
      document.getElementById(id).style.opacity = "1";
      document.getElementById(id).style.visibility = "visible";
    }
  }
}
