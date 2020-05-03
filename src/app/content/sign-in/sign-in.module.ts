import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInRoutingModule } from './sign-in-routing.module';
import { SignInComponent } from './sign-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { SharedModule } from '../../shared/services/shared.module';
import { AuthService } from '../../shared/services/auth.service';
// import { MatButtonModule } from '@angular/material/button';
// import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [SignInComponent],
  imports: [
    // CommonModule,
    SharedModule,
    SignInRoutingModule,
    // FormsModule,
    // ReactiveFormsModule,
    // MatCardModule,
    // MatButtonModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatIconModule,
    // MatToolbarModule,
    // MatSnackBarModule,
    // MatSidenavModule,
    // MatListModule
  ],
  providers: [ AuthService ]
})
export class SignInModule { }
