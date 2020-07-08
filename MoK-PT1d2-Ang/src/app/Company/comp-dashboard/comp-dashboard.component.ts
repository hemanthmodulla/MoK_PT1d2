import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-dashboard',
  templateUrl: './comp-dashboard.component.html',
  styleUrls: ['./comp-dashboard.component.scss']
})
export class CompDashboardComponent implements OnInit {
  activewrapper = true;
  activeProfile = false;

  constructor() { }

  ngOnInit(): void {
  }

  ShowSideNav(event: Event) {
    this.activewrapper = !this.activewrapper;
  }
  ShowProfileOptions(event: Event) {
    this.activeProfile = !this.activeProfile;
  }

}
