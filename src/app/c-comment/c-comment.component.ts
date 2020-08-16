import { Component, OnInit } from '@angular/core';

var mc;

@Component({
  selector: 'c-comment',
  templateUrl: './c-comment.component.html',
  styleUrls: ['./c-comment.component.css']
})
export class CCommentComponent implements OnInit {

  commentTitles = ["Key KPIs - 04/08/2020"];
  commentTitle = this.commentTitles[0];
  comments = ["Brand A has had a strong quarter so far with paid clicks increasing by 300.1K over the last week as well as in increase in market share. The brand team expects the market share to decrease when there is FDA approval for the other drugs in this market. So far, Brand A has the widest spectrum of situational use being taken in both during social events and while at home. The total ROI has yeilded 2M over the previous year and bulk orders per customer averaging at about 3.2. Notable chances for improvement involve the social experience of the drug and the hourly paid clicks. Replacing the television ad campaign with online marketing is considered to be one of the largest contributing factors to our ROI. Research recently taken place has also show that there is a positive correlation between patient age and number of orders justifying the ad campaigns targeted at older customers. While this particular campaign is effective, our major competition has yet to engage in as many ad campaigns as Brand A which may be cause to slow down these ads. Overall Brand A is comparing favorably to the other drugs in this market and continues to prove a strong investment for many years to come."];
  comment = this.comments[0];

  constructor() { }

  mediaCheck(m) {
    if (m.matches) { // If media query matches
      mc = 0;
    } else {
      mc = 1
    }
  }

  moveComment() {
      if(document.getElementById("arrowIcon").innerHTML == "keyboard_arrow_up")
      {
        document.getElementById("cComment").style.top = "0vh"
        document.getElementById("cComment").style.marginTop = "70vh";
        document.getElementById("arrowIcon").innerHTML = "keyboard_arrow_down";
      }
      else {
        document.getElementById("cComment").style.top = "5vh"
        document.getElementById("cComment").style.marginTop = "92vh"
        document.getElementById("arrowIcon").innerHTML = "keyboard_arrow_up";
      }
  }

  ngOnInit(): void {

    var m
    var x;

    m = window.matchMedia("(max-width: 1000px)")
    this.mediaCheck(m); // Call listener function at run time
  
    if(mc == 0) 
    {
      document.getElementById("cComment").style.top = "5vh";
    }

  }

}
