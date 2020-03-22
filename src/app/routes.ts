import { Routes } from "@angular/router";
import { AuthGuard } from "./shared/services/auth.quard";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "backoffice",
    pathMatch: "full"
  },
  {
    path: "signin",
    loadChildren: " ./content/sign-in/sign-in.module#SignInModule",
    canActivate: [AuthGuard]
  }
  // {
  //   path; '**',
  // redirectTo: 'backoffice',
  // }
];
