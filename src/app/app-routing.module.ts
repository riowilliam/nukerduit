import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard, GuestGuard } from './core/guards';
import { CommonLayoutComponent } from './layouts/components/common-layout/common-layout.component';
import { NoLayoutComponent } from './layouts/components/no-layout/no-layout.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: '',
    component: NoLayoutComponent,
    children: [
      {
        path: 'auth',
        canActivate: [GuestGuard],
        loadChildren: () =>
          import('./features/auth/auth.module').then((m) => m.AuthModule),
      },
      {
        path: 'not-found',
        loadChildren: () =>
          import('./features/feature-not-found/feature-not-found.module').then(
            (m) => m.FeatureNotFoundModule
          ),
      },
    ],
  },
  {
    path: '',
    component: CommonLayoutComponent,
    children: [
      {
        path: 'home',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./features/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'buy-transaction',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./features/buy-transaction/buy-transaction.module').then(
            (m) => m.BuyTransactionModule
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
