import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  LoggedInUserInfo: User;

  constructor(private http: HttpClient) { }
  UpdateUserInformation() {
    console.log("i m here");
    return this.http.post(environment.apiURL + '/User/', this.LoggedInUserInfo, { observe: 'response' });
  }
  GetDataForLoggedInUser(){
    const registrationID = sessionStorage.getItem('sessionId');
    console.log("yo");
    console.log(registrationID);
    return this.http.get(environment.apiURL + '/User/' + registrationID);
  }
}
