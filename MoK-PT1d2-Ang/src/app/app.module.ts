import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DynamicModule } from 'ng-dynamic-component';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './HomePage/login/login.component';
import { RegistrationComponent } from './HomePage/registration/registration.component';
import { LoginService } from './services/login.service';
import {FormsModule} from '@angular/forms';
import { GridsterModule } from 'angular-gridster2';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { ProfileinfoComponent } from './Personal/profileinfo/profileinfo.component';
import { MatToolbarModule, } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule, } from '@angular/material/sidenav';
import { MatListModule, } from '@angular/material/list';
import { MatButtonModule, } from '@angular/material/button';
import { DashboardComponent } from './Main/dashboard/dashboard.component';
import { SidenavComponent } from './Main/sidenav/sidenav.component';
import { DashboardBodyComponent } from './Main/dashboard-body/dashboard-body.component';
import { CompDashboardComponent } from './Company/comp-dashboard/comp-dashboard.component';
import { CompEditComponent } from './Company/comp-edit/comp-edit.component';
import { CheckboxComponent } from './widgets/checkbox/checkbox.component';
import { EditComponent } from './widgets/edit/edit.component';
import { ImageComponent } from './widgets/image/image.component';
import { InputFormComponent } from './widgets/input-form/input-form.component';
import { TextboxComponent } from './widgets/textbox/textbox.component';
import { CompanyGridComponent } from './widgets/company-grid/company-grid.component';
import { DashboardService } from './services/dashboard.service';
import { WidgetCommunicationService } from './services/widget-communication.service';
import { KendoComponent } from './widgets/kendo/kendo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ProfileinfoComponent,
    DashboardComponent,
    SidenavComponent,
    DashboardBodyComponent,
    CompDashboardComponent,
    CompEditComponent,
    CheckboxComponent,
    EditComponent,
    ImageComponent,
    InputFormComponent,
    TextboxComponent,
    CompanyGridComponent,
    KendoComponent,
  ],
  imports: [
    // tslint:disable-next-line: deprecation
    DynamicModule.withComponents([ InputFormComponent, ImageComponent, CheckboxComponent]),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    GridsterModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    ToastrModule.forRoot(),
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    CompanyGridComponent,
    InputFormComponent,
    ImageComponent,
    CheckboxComponent,
    MatIconModule
  ],
  providers: [LoginService,
    DashboardService,
    WidgetCommunicationService],
  entryComponents: [
      InputFormComponent,
      TextboxComponent,
      CheckboxComponent,
      ImageComponent
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
