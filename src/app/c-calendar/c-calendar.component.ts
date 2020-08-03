import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'c-calendar',
  templateUrl: './c-calendar.component.html',
  styleUrls: ['c-calendar.component.css'],
})
export class CCalendarComponent implements OnInit {

  public multiSelect: Boolean = true;
  public minDate: Date = new Date ("09/29/1993");
  public maxDate: Date = new Date ("09/29/2093");
  public dateValues: Date = new Date ("02/17/2020");
  constructor () {}
  
  customDates(args): void {
    let span: HTMLElement;
    //defines the custom HTML element to be added.
    span = document.createElement('span');
    //Use "e-icons" class name to load Essential JS 2 built-in icons.
    span.setAttribute('class', 'e-icons highlight-day');
      //append the span element to day cell.
      args.element.appendChild(span);
      //set the custom tooltip to the special dates.
      args.element.setAttribute('title', 'World health day!');
      //Use "special" class name to highlight the special dates, which you can refer in "styles.css".
      args.element.className = 'special';
      args.element.appendChild(span);
      args.element.className = 'special';
      //set the custom tooltip to the special dates.
      args.element.setAttribute('title', 'World forest day');
}

  ngOnInit() {

  }

  toggleCalendar() {
    if(document.getElementById("cCalendar").style.visibility == "hidden") {
      document.getElementById("cCalendar").style.opacity = "1";
      document.getElementById("cCalendar").style.visibility = "visible";
    }
    else {
      document.getElementById("cCalendar").style.opacity = "0";
      document.getElementById("cCalendar").style.visibility = "hidden";
    }
  }

}
