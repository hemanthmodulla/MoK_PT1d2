import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  activewrapper = true;
  activeProfile = false;

  constructor(public router: Router, public dashboardservice: DashboardService) { }

  ngOnInit(): void {
  }
  ShowSideNav(event: Event) {
    this.activewrapper = !this.activewrapper;
  }
  ShowProfileOptions(event: Event) {
    console.log('safdefs');
    this.activeProfile = !this.activeProfile;
  }

  myProfile(){
    this.dashboardservice.profileSelected = true;
    this.router.navigate(['/home']);
  }
}
