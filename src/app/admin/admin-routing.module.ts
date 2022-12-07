import { Routes } from '@angular/router';
import { TelaInicioComponent } from './tela-inicio/tela-inicio.component';
import { TelaRlclientesComponent } from './tela-rlclientes/tela-rlclientes.component';

export const adminRoutes: Routes = [
  { path: 'admin', redirectTo: 'admin/inicio' },
  { path: 'admin/inicio', component: TelaInicioComponent },
  { path: 'admin-rlclientes', redirectTo: 'admin/rlclientes' },
  { path: 'admin/rlclientes', component: TelaRlclientesComponent },
];
