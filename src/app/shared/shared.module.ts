import { AuthService } from './services/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import {
  MatDialogModule,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatToolbarModule,
  MatSnackBarModule,
  MatSidenavModule,
  MatListModule,
} from '@angular/material';
import { BASE_URL_TOKEN } from '../../config';
import { environment } from '../../environments/environment';
import { InterceptorService } from './services/interceptor.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDialogModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: BASE_URL_TOKEN,
      useValue: environment.baseUrl,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
    AuthService
  ],
})
export class SharedModule {
  public static forRoot(): ModuleWithProviders{
    return {
      ngModule: SharedModule,
      providers: [
        {
          provide: BASE_URL_TOKEN,
          useValue: environment.baseUrl,
        },
      ],
    };
  }
}
