import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'entrar',
    loadComponent: () => import('./entrar/entrar.component').then(m => m.EntrarComponent)
  },
  {
    path: '',
    redirectTo: '/entrar',
    pathMatch: 'full',
  }
];
