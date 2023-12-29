import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { authGuard } from 'src/app/guards/auth.guard';
import { LogoutComponent } from 'src/app/pages/logout/logout.component';
import { TodayCasesComponent } from './components/today-cases/today-cases.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    component: AdminDashboardComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },

      {
        path: 'about',

        component: AboutComponent,
      },
      {
        path: 'today-case',
        component: TodayCasesComponent,
      },
      // {
      //   path: 'add-client',
      //   component: ClientAddComponent,
      // },
      {
        path: '',
        redirectTo: '/admin/home',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
