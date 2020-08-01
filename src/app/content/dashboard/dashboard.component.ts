import { Component, ViewChild } from '@angular/core';
import { MatSidenav, MatDrawer } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent{

  @ViewChild('drawer') drawer: MatSidenav;

  public openedNavBar = false;

  close() {
    this.drawer.close();
    this.openedNavBar = false;
  }
  public open(): void {
    this.openedNavBar ? this.drawer.close() : this.drawer.open();
    this.openedNavBar = !this.openedNavBar;
  }

}
