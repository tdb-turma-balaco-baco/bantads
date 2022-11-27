import { Routes } from '@angular/router';
import { TelaInicioComponent } from './tela-inicio/tela-inicio.component';

export const gerenteRoutes: Routes = [
  { path: 'gerente', redirectTo: 'gerente/inicio' },
  { path: 'gerente/inicio', component: TelaInicioComponent },
];
