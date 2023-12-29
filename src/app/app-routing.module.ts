import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { AboutComponent } from './modules/admin/components/about/about.component';
import { HearingHistoryComponent } from './pages/hearing-history/hearing-history.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  // {
  //   path: '',
  //   component: DashboardComponent,
  //   // redirectTo: 'login',
  //   // pathMatch: 'full',
  // },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
  {
    path: 'hearing/history',
    component: HearingHistoryComponent,
  },

  {
    path: '',
    component: DashboardComponent,
  },
  // {
  //   path: '',
  //   component: LayoutComponent,
  //   children: [
  //     {
  //       path: 'dashboard',
  //       component: DashboardComponent,
  //     },
  //   ],
  // },
  {
    path: 'admin',

    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
