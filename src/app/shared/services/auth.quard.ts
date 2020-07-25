import { CanActivate, Router } from '@angular/router';
import { Inject, Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  public constructor(
      private router: Router, public auth: AuthService) {}

  canActivate(): boolean {
    if (!localStorage.getItem('Token')) {
      this.router.navigate(['sign-in']);
      return false;
    }
    return true;
  }
}
