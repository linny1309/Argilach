import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'material-icons/css/material-icons.scss';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Argilach';

  messages = this.http.get<any[]>('http://localhost:1337');

  constructor(private http: HttpClient) {}

  post() {
    this.http.post<any>('http://localhost:4201/users', {username: "", password: ""})
    .subscribe(next => console.log(next));
  }
}
