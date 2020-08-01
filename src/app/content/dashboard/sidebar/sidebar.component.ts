import {
  AfterViewInit,
  Component,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements AfterViewInit {
  @Output()
  public setSidebarControl: EventEmitter<any> = new EventEmitter(true);

  @ViewChild('drawer', { static: false })
  public drawer: MatSidenav;

  public ngAfterViewInit(): void {
    this.setSidebarControl.emit(this.drawer);
  }
}
