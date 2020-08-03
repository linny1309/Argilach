import { Component, OnInit } from '@angular/core';

var mc;

@Component({
  selector: 'c-comment',
  templateUrl: './c-comment.component.html',
  styleUrls: ['./c-comment.component.css']
})
export class CCommentComponent implements OnInit {

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
