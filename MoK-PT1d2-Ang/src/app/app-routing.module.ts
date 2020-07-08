import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './HomePage/login/login.component';
import { DashboardComponent } from './Main/dashboard/dashboard.component';
import { RegistrationComponent } from './HomePage/registration/registration.component';
import { AppComponent } from './app.component';
import { ProfileinfoComponent } from './Personal/profileinfo/profileinfo.component';
import { CompDashboardComponent } from './Company/comp-dashboard/comp-dashboard.component';
import { CompanyGridComponent } from './widgets/company-grid/company-grid.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'myprofile', component: ProfileinfoComponent},
  {path: 'home', component: DashboardComponent},
  {path: 'company', component: CompDashboardComponent},
  {path: 'dashboard', component: CompanyGridComponent},
  {path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
