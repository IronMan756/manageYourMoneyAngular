import { SharedModule } from './../../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    SharedModule
  ]
})
export class DashboardModule { }
