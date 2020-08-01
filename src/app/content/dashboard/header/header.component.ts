import {Component, Output, EventEmitter} from '@angular/core';

// /**
//  * @title Basic toolbar
//  */
@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
})
export class HeaderComponent {
  @Output()
  public openSideBar: EventEmitter<void> = new EventEmitter<void>();
  public open(){
    this.openSideBar.emit();
  }
}