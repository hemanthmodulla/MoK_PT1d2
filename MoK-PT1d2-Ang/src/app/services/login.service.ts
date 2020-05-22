import { Injectable } from '@angular/core';
import { Login } from '../models/login.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginData: Login;
  constructor(private http: HttpClient) { }

  CheckLogin() {
    return this.http.post(environment.apiURL + '/Login', this.loginData, { observe: 'response' });
  }
}
