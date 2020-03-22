import { SignInComponent } from './content/sign-in/sign-in.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';



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
    component: SignInComponent,
    // loadChildren: " ./content/sign-in/sign-in.module#SignInModule",
    canActivate: [AuthGuard]
  }
  // {
  //   path; '**',
  // redirectTo: 'backoffice',
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
