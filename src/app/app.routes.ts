import { Routes } from '@angular/router';
import { SidenavContentLayout } from './core/layouts/sidenav-content.layout';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/dashboard',
  },
  {
    path: 'dashboard',
    component: SidenavContentLayout,
    loadChildren: () =>
      import('./features/dashboard/dashboard.routes').then((m) => m.routes),
  },
];
