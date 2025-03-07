import { Routes } from '@angular/router';
import { canDeactivateGuard } from '../guards/can-deactivate.guard';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canDeactivate: [canDeactivateGuard],
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/profile', pathMatch: 'full' },
];
