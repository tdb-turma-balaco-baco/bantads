import { Routes } from '@angular/router';
import { TelaInicioComponent } from './tela-inicio/tela-inicio.component';

export const ClienteRoutes: Routes = [
  { path: 'cliente', redirectTo: 'cliente/inicio' },
  { path: 'cliente/inicio', component: TelaInicioComponent },
];
