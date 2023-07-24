import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'tela-inicial',
    loadComponent: () => import('./tela-inicial/tela-inicial.component').then(m => m.TelaInicialComponent)
  },
  {
    path: 'listar-gerentes',
    loadComponent: () => import('./listar-gerentes/listar-gerentes.component').then(m => m.ListarGerentesComponent)
  },
  {
    path: 'criar-gerente',
    loadComponent: () => import('./criar-gerente/criar-gerente.component').then(m => m.CriarGerenteComponent)
  },
  {
    path: '',
    redirectTo: '/admin/tela-inicial',
    pathMatch: 'full'
  }
];
