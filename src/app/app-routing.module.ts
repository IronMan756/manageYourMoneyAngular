import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { of } from 'rxjs';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },
  {
    path: 'sign-in',
    loadChildren: () =>
      import('./content/sign-in/sign-in.module').then(
        mod => mod.SignInModule)
  },
  {
    path: 'sign-up',
    loadChildren: () =>
      import('./content/sign-up/sign-up.module').then(
        mod => mod.SignUpModule)
  },
  // {
  //   path: 'dashboard',
  //   loadChildren: () =>
  //     import('./content/dashboard/dashboard.module').then(m => m.DashboardModule)
  // },
  {
    path: 'dashboard',
    

    loadChildren: () =>
      import('./content/dashboard/dashboard.module').then(
        (mod) => mod.DashboardModule
      ),
    canActivate: [],
    data: {
      state: 'dashboard',
    },
  },
  {
    path: '**',
      redirectTo: 'sign-in',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
