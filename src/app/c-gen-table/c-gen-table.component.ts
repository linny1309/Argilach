import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { JSDocCommentStmt } from '@angular/compiler';
import { JsonPipe } from '@angular/common';

  const barChartData = require("./json/bar_chart.json");
  const lineChartData = require("./json/line_chart.json");
  const pieChartData = require("./json/pie_chart.json");
  const bubbleChartData = require("./json/bubble_chart.json");
  const scatterPlotData = require("./json/scatter_plot.json");
  const radarChartData = require("./json/radar_chart.json");
  const comboChartData = require("./json/combo_chart.json");
  const kpiCards = require("./json/kpi_cards.json");
  const granChartData = require("./json/gran_chart.json");

  var curData = kpiCards;

function downloadClickJS() {
    this.exportToJson();
  }

function downloadData(json) {

var fileContents = JSON.stringify(json);
var filename = "hello.txt";
var filetype = "text/plain";
var dataURI;

var a = document.createElement("a");
dataURI = "data:" + filetype +
    ";base64," + btoa(fileContents);
a.href = dataURI;
a['download'] = filename;
var e = document.createEvent("MouseEvents");
// Use of deprecated function to satisfy TypeScript.
e.initMouseEvent("click", true, false,
    document.defaultView, 0, 0, 0, 0, 0,
    false, false, false, false, 0, null);
a.dispatchEvent(e);

window.open(dataURI);

}


  let titles = [ "Key KPIs","Bar Chart","Line Chart","Pie Chart","Bubble Chart","Scatter Plot","Radar Chart","Combo Chart","Gran Chart"];

	// scroll down for ES6 features. 

  // using regular methods.

  function tableFromJson(data) {
		// the json data. (you can change the values for output.)
        var myBooks = data;

        // Extract value from table header. 
        // ('Book ID', 'Book Name', 'Category' and 'Price')
        var col = [];
        for (var i = 0; i < myBooks.length; i++) {
            for (var key in myBooks[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // Create a table.
        var table = document.createElement("table");

        // Create table header row using the extracted headers above.
        var tr = table.insertRow(-1); 

        // table row.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // table header.
            th.innerHTML = col[i];
            th.style.color = "white";
            th.style.backgroundColor = "rgb(54, 54, 54)";
            th.style.fontFamily = "Arial, Helvetica, sans-serif";
            th.style.border = "solid 3px rgb(30,30,30)";
            table.style.textAlign = "center";
            tr.style.borderWidth = "1px";
            tr.appendChild(th);
        }

        // add json data to the table as rows.
        for (var i = 0; i < myBooks.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                if( myBooks[i][col[j]].toString().substring(0,2) == "20") {
                  tabCell.innerHTML = myBooks[i][col[j]].toString().substring(0,10);
                }
                else 
                  tabCell.innerHTML = myBooks[i][col[j]];
                tabCell.style.backgroundColor = "rgb(54, 54, 54)";
                tabCell.style.borderWidth = "1px";
                tabCell.style.border = "solid 3px rgb(30,30,30)";
                tabCell.style.color = "white";
                tabCell.style.fontFamily = "Arial, Helvetica, sans-serif";
            }
        }

        // Now, add the newly created table with json data, to a container.
        var divShowData = document.getElementById('showData');
        divShowData.innerHTML = "";
        divShowData.appendChild(table);
        
    }
    
    
    // using ES6 features.
    
//     let tableFromJson = () => {
//     	// the json data.
//         const myBooks = [
//             {'Book ID': '1', 'Book Name': 'Challenging Times',
//                 'Category': 'Business', 'Price': '125.60'
//             },
//             {'Book ID': '2', 'Book Name': 'Learn JavaScript',
//                 'Category': 'Programming', 'Price': '56.00'
//             },
//             {'Book ID': '3', 'Book Name': 'Popular Science',
//                 'Category': 'Science', 'Price': '210.40'
//             }
//         ]
        
//         // Extract value from table header. 
//         // ('Book ID', 'Book Name', 'Category' and 'Price')
//         let col = [];
//         for (let i = 0; i < myBooks.length; i++) {
//             for (let key in myBooks[i]) {
//                 if (col.indexOf(key) === -1) {
//                     col.push(key);
//                 }
//             }
//         }
        
//         // Create a table.
//         const table = document.createElement("table");

//         // Create table header row using the extracted headers above.
//         let tr = table.insertRow(-1);                   // table row.

//         for (let i = 0; i < col.length; i++) {
//             let th = document.createElement("th");      // table header.
//             th.innerHTML = col[i];
//             tr.appendChild(th);
//         }

//         // add json data to the table as rows.
//         for (let i = 0; i < myBooks.length; i++) {

//             tr = table.insertRow(-1);

//             for (let j = 0; j < col.length; j++) {
//                 let tabCell = tr.insertCell(-1);
//                 tabCell.innerHTML = myBooks[i][col[j]];
//             }
//         }

//         // Now, add the newly created table with json data, to a container.
//         const divShowData = document.getElementById('showData');
//         divShowData.innerHTML = "";
//         divShowData.appendChild(table);
//     }

@Component({
  selector: 'c-gen-table',
  templateUrl: './c-gen-table.component.html',
  styleUrls: ['./c-gen-table.component.css'],
  host: {'(document:click)': 'onChange($event)'}
})
export class CGenTableComponent implements OnInit {

  name = 'Angular 5';
  fileUrl;

  ngOnInit() {

    tableFromJson(kpiCards);

  }

  onChange(event) {
    if(event.target == "[object HTMLSpanElement]" || event.target == "[object HTMLDivElement]") {  
      if(event.target.id == "leftSpan0") {
        curData = kpiCards;
        tableFromJson(kpiCards);
        document.getElementById("tableTitle").innerHTML = titles[0];
      }
      else if(event.target.id == "leftSpan1" || event.target.id == "kpiDiv0") {
        curData = barChartData;
        tableFromJson(barChartData);
        document.getElementById("tableTitle").innerHTML = titles[1];
      }
      else if(event.target.id == "leftSpan2" || event.target.id == "kpiDiv1") {
        curData = lineChartData;
        tableFromJson(lineChartData);
        document.getElementById("tableTitle").innerHTML = titles[2];
      }
      else if(event.target.id == "leftSpan3" || event.target.id == "kpiDiv2") {
        curData = pieChartData;
        tableFromJson(pieChartData);
        document.getElementById("tableTitle").innerHTML = titles[3];
      }
      else if(event.target.id == "leftSpan4" || event.target.id == "kpiDiv3") {
        curData = bubbleChartData;
        tableFromJson(bubbleChartData);
        document.getElementById("tableTitle").innerHTML = titles[4];
      }
      else if(event.target.id == "leftSpan5" || event.target.id == "kpiDiv4") {
        curData = scatterPlotData;
        tableFromJson(scatterPlotData);
        document.getElementById("tableTitle").innerHTML = titles[5];
      }
      else if(event.target.id == "leftSpan6" || event.target.id == "kpiDiv5") {
        curData = radarChartData;
        tableFromJson(radarChartData);
        document.getElementById("tableTitle").innerHTML = titles[6];
      }
      else if(event.target.id == "leftSpan7" || event.target.id == "kpiDiv6") {
        curData = comboChartData;
        tableFromJson(comboChartData);
        document.getElementById("tableTitle").innerHTML = titles[7];
      }
      else if(event.target.id == "leftSpan8" || event.target.id == "kpiDiv7") {
        curData = granChartData;
        tableFromJson(granChartData);
        document.getElementById("tableTitle").innerHTML = titles[8];
      }
      else if(event.target.id == "downloadClick") {
        this.exportToJson();
      }
    }
    if(event.target.id == "rightSpan4") {
      this.exportToJson();
    };
  }

  exportToJson() {
    let filename = "export.json";
    let contentType = "application/json;charset=utf-8;";
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      var blob = new Blob([decodeURIComponent(encodeURI(JSON.stringify(curData)))], { type: contentType });
      navigator.msSaveOrOpenBlob(blob, filename);
    } else {
      var a = document.createElement('a');
      a.download = filename;
      a.href = 'data:' + contentType + ',' + encodeURIComponent(JSON.stringify(curData));
      a.target = '_blank';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  }

}
