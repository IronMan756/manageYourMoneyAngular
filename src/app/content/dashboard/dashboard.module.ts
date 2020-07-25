import { FooterComponent } from './footer/footer.component';
import { SharedModule } from './../../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';



@NgModule({
  declarations: [DashboardComponent, FooterComponent, HeaderComponent],
  imports: [
    // MatToolbarModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
      },
    ])
  ]
})
export class DashboardModule { }
