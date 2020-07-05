import { CategoriesService } from './services/categories.service';
import { IncomesService } from './services/incomes.service';
import { AuthService } from './services/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import {
  MatDialogModule,
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
import { RouterEffects } from '../store/effects/router.effect';
import { ExpencesService } from './services/expences.service';
import { JwtService } from './services/jwt.service';
import { PursesService } from './services/purses.service';

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
    AuthService,
    ExpencesService,
    JwtService,
    IncomesService,
    PursesService,
    CategoriesService
  ],
})
export class SharedModule {
  public static forRoot(): ModuleWithProviders{
    return {
      ngModule: SharedModule,
      providers: [
        AuthService,
        RouterEffects,
        {
          provide: BASE_URL_TOKEN,
          useValue: environment.baseUrl,
        },
      ],
    };
  }
}
