import { Component, OnInit } from '@angular/core';

var elem = document.getElementById("body");
var n = 0;
var visual = "chart0";
var m;
var mc;

let icons = ["score","insert_chart","show_chart","pie_chart","bubble_chart","scatter_plot","score","leak_add","multiline_chart"];
let titles =  ["Key KPIs","Bar Chart","Line Chart","Pie Chart","Bubble Chart","Scatter Plot","KPI Scores","Radar Chart","Multi Chart"];
let rightMenus = ["cRightMenu","cFilterMenu","cCalendar","cProfileMenu"];
let leftMenus = ["cSearch","cLeftMenu"];

function closeMenus(menus,except) {
  for(var n = 0; n < menus.length; n++) {
    if(menus[n] !== except) {
      document.getElementById(menus[n]).style.opacity = "0";
      document.getElementById(menus[n]).style.visibility = "hidden";
    }
  }
}

function toggleFullscreenJS() {
  if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen(); 
    }
  }
}

function toggleMenusJS(id) {
  if(document.getElementById(id).style.visibility == "visible") {
    document.getElementById(id).style.opacity = "0";
    document.getElementById(id).style.visibility = "hidden";
  }
  else {
    document.getElementById(id).style.opacity = "1";
    document.getElementById(id).style.visibility = "visible";
  }
}

@Component({
  selector: 'c-top-bar',
  templateUrl: './c-top-bar.component.html',
  styleUrls: ['./c-top-bar.component.css']
})

export class CTopBarComponent implements OnInit {

  constructor() { }

  toggleMenuTS(id) {
    closeMenus(leftMenus,id);
    toggleMenusJS(id);
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
    closeMenus(rightMenus,"cRightMenu");
    document.getElementById("mobileI").innerHTML = "settings";
    toggleMenusJS("cRightMenu");
  }

  toggleFilterMenuTS() {
    closeMenus(rightMenus,"cFilterMenu");
    document.getElementById("mobileI").innerHTML = "reply";
    toggleMenusJS("cFilterMenu");
  }

  toggleProfileMenuTS() {
    closeMenus(rightMenus,"cProfileMenu");
    document.getElementById("mobileI").innerHTML = "reply";
    toggleMenusJS("cProfileMenu");
  }

  toggleMobileMenuTS() {
    closeMenus(rightMenus,"cRightMenu");
    toggleMenusJS("cRightMenu");
    document.getElementById("mobileI").innerHTML = "settings";

  }

}
