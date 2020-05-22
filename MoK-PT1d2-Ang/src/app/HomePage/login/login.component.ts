import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CompileShallowModuleMetadata } from '@angular/compiler';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  isValid = true;
  constructor(public loginService: LoginService,
              private toastr: ToastrService,
              private router: Router) { }

  ngOnInit() {
    if (this.loginService.loginData == null) {
      // tslint:disable-next-line: no-trailing-whitespace
      this.loginService.loginData = { 
        UserName : '',
        Password : '',
        // other properties , that you are using on template side 
    }
    }
  }
  validateForm() {
    this.isValid = true;
    if (this.loginService.loginData.UserName == null) {
      this.isValid = false;
    } else if (this.loginService.loginData.Password  == null) {
      this.isValid = false;
    }
    return this.isValid;
  }
  onSubmit(form: NgForm) {
    if (this.validateForm()) {
      this.loginService.CheckLogin().subscribe(res => {
        if(res.status == 200){
          this.router.navigate(['/home']);
        }
      }, (err) => {
        alert('The email or phone number you’ve entered doesn’t match any account. Try again or Sign up for an account.')
      });
    }
  }

  // resetForm(form?: NgForm)
  // {
  //   // tslint:disable-next-line: no-conditional-assignment
  //   if (form = null) {
  //     form.resetForm();
  //   }
  //   this.loginService.loginData = {
  //     UserName: null,
  //     Password: null
  //   };
  // }

}
