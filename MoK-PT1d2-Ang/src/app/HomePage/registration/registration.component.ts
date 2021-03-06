import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../../services/registration.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { getDate } from 'ngx-bootstrap/chronos/utils/date-getters';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: []
})
export class RegistrationComponent implements OnInit {

  dob;
  // tslint:disable-next-line: variable-name
  init_password = '';
  // tslint:disable-next-line: variable-name
  repeat_password = '';
  isValid = true;
  constructor(public registrationService: RegistrationService,
              private toastr: ToastrService,
              private router: Router) { }
  ngOnInit() {
    if (this.registrationService.RegisteredUserData == null) {
      // tslint:disable-next-line: no-trailing-whitespace
      this.registrationService.RegisteredUserData = { 
        UserName : '',
        Password : '',
        DateOfBirth: new Date()
    };
    }
  }
  validateForm() {
    this.isValid = false;
    if (this.registrationService.RegisteredUserData.UserName != null && this.init_password  != null &&
      // tslint:disable-next-line: triple-equals
      this.init_password == this.repeat_password && this.dob != null  ) {
      this.isValid = true;
      console.log('true');
      this.registrationService.RegisteredUserData.Password = this.init_password;
      this.registrationService.RegisteredUserData.DateOfBirth = this.dob;
      console.log(this.registrationService.RegisteredUserData.Password);
      console.log(this.registrationService.RegisteredUserData.UserName);
      console.log(this.registrationService.RegisteredUserData.DateOfBirth);
    }
    return this.isValid;
  }
  onSubmit(form: NgForm) {
    if (this.validateForm()) {
      this.registrationService.CheckUserInfoAndRegister().subscribe(res => {
        console.log(res);
        // tslint:disable-next-line: triple-equals
        if (res.status == 200){
          this.router.navigate(['/Login']);

        }
      }, (err) => {
        alert('UserName already exists in the data please select a new one....');
      });
    }
    // tslint:disable-next-line: triple-equals
    if (this.registrationService.RegisteredUserData.UserName == '' ){
      // tslint:disable-next-line: triple-equals
      alert('UserName is a required Field'); }else if (this.init_password == '' || this.repeat_password == ''){
      alert('Password or Repeat Password Field cannot be empty'); } else if (this.dob == null){
      // tslint:disable-next-line: triple-equals
      alert('Date of Birth is a required Field'); }else if (this.init_password != this.repeat_password){alert('Password and Repeat password are not same please enter again');
      }

  }
}

