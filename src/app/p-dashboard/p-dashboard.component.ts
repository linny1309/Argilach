import { Component, OnInit, ɵɵresolveBody, OnDestroy } from '@angular/core';
import { FirebaseService } from '../services/firestore..service';
import { FormGroup, FormBuilder, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router, RouterLink } from '@angular/router';

var ks = document.getElementsByClassName("kpi-score");
var ng = 0;
var eg;
var mc;

let kpiTitle = ["Paid Clicks by Application Type","Paid Search Clicks per Hour by Website","Brand A Market Share","Investment vs ROI / Yrs of Investment","Orders per Customer","Positive Customer Experiences","Bulk Orders Placed","Quantity Ordered"];
let kpiMeasure = ["Clicks","Clicks","","ROI","Orders","Customers","Bulk Orders","Quantity Ordered"]
let kpiScore = [909,6,46,33.0,3.2,41,49,126];
let vsNet = [300,-1,3,2,2.2,-5,4,16];
let vsNetLabel = ["vs PW","vs PM","","vs PY","vs PY","vs PY","vs PQ","PQ"];
let numAbr = ["K","K","%","M","","","",""];
let icons = ["score","bar_chart","show_chart","pie_chart","bubble_chart","scatter_plot","leak_add","multiline_chart","bar_chart"];
let kpiIcons = ["bar_chart","show_chart","pie_chart","bubble_chart","scatter_plot","leak_add","multiline_chart","bar_chart"];
let titles = ["Key KPIs","Bar Chart","Line Chart","Pie Chart","Bubble Chart","Scatter Plot","Radar Chart","Combo Chart","Gran Chart"];
let kpiSource = ["IPSOS","NeoGenomics","Adobe Analytics","Google Analytics","Vantage","SP","IPSOS","SP"];
let kpiDate = ["6/7/20","May-20","5/31/20","6/1/20","6/1/20","1/1/20","Q4","Q6"]; 

function checkBoxes() {
  var items = document.getElementsByClassName('check-box') as HTMLCollectionOf<HTMLInputElement>;
  for (var i = 0; i < items.length; i++) {
      //items[i] as HTMLInputElement
      if(items[i].id !="Winter" && items[i].id !="Spring" && items[i].id !="Summer" && items[i].id !="Fall" && items[i].id !="2016" && items[i].id !="2017" && items[i].id !="2018" && items[i].id !="2019" && items[i].id !="2020" )
        items[i].checked = true;
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0;
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

var vp = document.getElementsByClassName("vs-net");

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

function changeValue(entry, type) {
  var decimal = kpiScore[entry] - Math.trunc(kpiScore[entry]);
    if(type == 1)
        ks[0].innerHTML = kpiScore[entry] + numAbr[entry] + " " + kpiMeasure[entry];
    else if(type == 2)
        ks[0].innerHTML = kpiScore[0] + numAbr[entry] + " " + kpiMeasure[entry];
    else
      ks[entry].innerHTML = kpiScore[entry] + numAbr[entry] + " " + kpiMeasure[entry];
      document.getElementById("pixelAlert").innerHTML = kpiScore[entry] + numAbr[entry] + " " + kpiMeasure[entry];
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
  document.getElementById("kpiIcon").innerHTML = icons[n];
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

function resetKpis() {
  for(var x = 0; x < 8; x++) {
    document.getElementById("kpiDiv"+x).style.display = "";
  }
  for(x = 0; x < 4; x++) {
    document.getElementById("cat"+x).style.display = "";
  }
}

@Component({
  selector: 'p-dashboard',
  templateUrl: './p-dashboard.component.html',
  styleUrls: ['./p-dashboard.component.css']
})
export class PDashboardComponent implements OnInit {

  public fsData: Array<any>;
  public taskForm: FormGroup;
  public userAuth: Subscription;
  public taskDataSub: Subscription;
  public addFailed: boolean;

  constructor(public fs: FirebaseService, public fb: FormBuilder, public router: Router) {
      this.addFailed = false;
      this.fsData = new Array();

      this.taskForm = this.fb.group({
          task: new FormControl('', [ Validators.required, Validators.minLength(1) ])
      });
      this.userAuth = this.fs.signedIn.subscribe((user) => {
          if (user) {
          } else {
              this.router.navigate(['c-fb-signin']);
          }
      });
  }

  ngOnDestroy() {
      if (this.userAuth) this.userAuth.unsubscribe();
      if (this.taskDataSub) this.taskDataSub.unsubscribe();
  }

  signOut() {
      this.fs.signOut();
  }


  mediaCheck(m) {
    if (m.matches) { // If media query matches
      mc = 0;
    } else {
      mc = 1
    }
  }

  setPageTS(entry) {
    var search = document.getElementById("searchInput") as HTMLInputElement;
    search.value = "";
    resetKpis();
    checkBoxes();
    topFunction();
    filterFunction(entry);
    document.getElementById("pixelAlertText").style.display = "block";
    document.getElementById("content").style.overflow = "none";
    document.getElementById("chartContainer").style.visibility = "visible";
    document.getElementById("topKpi").style.pointerEvents = 'none';
    document.getElementById("cat0").style.display = "none";
    document.getElementById("topKpi").style.position = "fixed";
    document.getElementById("topKpi").style.width = "99%";
    //scrollTo("descContainer" ,0, 0);
    document.getElementById("pixelAlert").style.display = "block";
    var m;
    var element;
    element = vp[0];
    element.innerHTML = "";
    setGrayJS();
    changeValue(entry,1);
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
    this.mediaCheck(m);
  }

  ngOnInit(): void {
    var x;

    var kpiDiv = document.getElementsByClassName("c-kpi-card");
    for(x = 0; x < kpiDiv.length; x++) {
      kpiDiv[x].id = "kpiDiv"+x;
    }

    var url = window.location.href + "?reloaded";

    if(window.location.href.slice(-9) != "reloaded=") {
      location.replace('http://localhost:1337/');
      location.reload();
      location.replace(url);
    }
  }

}
