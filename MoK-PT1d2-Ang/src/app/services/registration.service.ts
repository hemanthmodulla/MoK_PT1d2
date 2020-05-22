import { Injectable } from '@angular/core';
import { Registration } from '../models/registration.model';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  RegisteredUserData: Registration;
  constructor(private http: HttpClient) { }
  CheckUserInfoAndRegister() {
    return this.http.post(environment.apiURL + '/Register', this.RegisteredUserData, { observe: 'response' });
  }
}
