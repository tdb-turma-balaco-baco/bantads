import { Routes } from '@angular/router';
import { ListarClientesComponent } from './listar-clientes/listar-clientes.component';
import { TelaInicioComponent } from './tela-inicio/tela-inicio.component';
import { TopClientesComponent } from './top-clientes/top-clientes.component';

export const gerenteRoutes: Routes = [
  { path: 'gerente', redirectTo: 'gerente/inicio' },
  { path: 'gerente/inicio', component: TelaInicioComponent },
  { path: 'gerente/top-clientes', component: TopClientesComponent },
  { path: 'gerente/clientes', component: ListarClientesComponent },
  { path: 'gerente/clientes/:id', component: TelaInicioComponent },
];
