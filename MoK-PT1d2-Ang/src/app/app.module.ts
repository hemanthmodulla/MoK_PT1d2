import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './HomePage/login/login.component';
import { RegistrationComponent } from './HomePage/registration/registration.component';
import { LoginService } from './services/login.service';
import {FormsModule} from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatToolbarModule, } from '@angular/material/toolbar';
import { MatIconModule, } from '@angular/material/icon';
import { MatSidenavModule, } from '@angular/material/sidenav';
import { MatListModule, } from '@angular/material/list';
import { MatButtonModule, } from '@angular/material/button';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { ProfileinfoComponent } from './personal/profileinfo/profileinfo.component';
import { DashboardComponent } from './Main/dashboard/dashboard.component';
import { SidenavComponent } from './Main/sidenav/sidenav.component';
import { DashboardBodyComponent } from './Main/dashboard-body/dashboard-body.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ProfileinfoComponent,
    DashboardComponent,
    SidenavComponent,
    DashboardBodyComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    ToastrModule.forRoot(),
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
