import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  activewrapper = true;
  constructor() { }

  ngOnInit(): void {
  }
  ShowSideNav(event: Event) {
    this.activewrapper = !this.activewrapper;
  }
}
