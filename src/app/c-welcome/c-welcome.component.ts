import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'c-welcome',
  templateUrl: './c-welcome.component.html',
  styleUrls: ['./c-welcome.component.css']
})
export class CWelcomeComponent implements OnInit {

  checkPinTS(value) {
    if(value=60160530) {
      document.getElementById("cWelcome").style.visibility = "hidden";
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
