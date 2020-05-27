import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './HomePage/login/login.component';
import { RegistrationComponent } from './HomePage/registration/registration.component';
import { AppComponent } from './app.component';
import { ProfileinfoComponent } from './Personal/profileinfo/profileinfo.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'myprofile', component: ProfileinfoComponent},
  {path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
