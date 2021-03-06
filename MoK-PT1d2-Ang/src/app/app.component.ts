import { Component } from '@angular/core';
import { HttpService } from './services/http.service';
import { Login } from './models/login.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles:[]
})
export class AppComponent {
  public logins: Login[];

  constructor(private httpService: HttpService){}
 
  public getLogins = () => {
    let route: string = 'http://localhost:5000/api/Login';
    this.httpService.getData(route)
    .subscribe((result) => {
      this.logins = result as Login[];
    },
    (error) => {
      console.error(error);
    });
  }
}
