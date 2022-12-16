import { Routes } from '@angular/router';
import { TelaInicioComponent } from './tela-inicio/tela-inicio.component';
import { TopClientesComponent } from './top-clientes/top-clientes.component';

export const gerenteRoutes: Routes = [
  { path: 'gerente', redirectTo: 'gerente/inicio' },
  { path: 'gerente/inicio', component: TelaInicioComponent },
  { path: 'gerente/top-clientes', component: TopClientesComponent },
];
