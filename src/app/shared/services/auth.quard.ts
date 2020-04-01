import { CanActivate, Router } from "@angular/router";
import { Inject, Injectable } from '@angular/core';

import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  public constructor(private router: Router, public auth: AuthService) {}
  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      console.log("it ia not autorise");
      this.router.navigate(["login"]);
      return false;
    }
    console.log("user autorisated!!!!!");
    return true;
  }
}
