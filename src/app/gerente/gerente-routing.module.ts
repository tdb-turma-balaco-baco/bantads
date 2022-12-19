import { Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { ConsultarClienteComponent } from './consultar-cliente/consultar-cliente.component';
import { DetalheClienteComponent } from './detalhe-cliente/detalhe-cliente.component';
import { ListarClientesComponent } from './listar-clientes/listar-clientes.component';
import { TelaInicioComponent } from './tela-inicio/tela-inicio.component';
import { TopClientesComponent } from './top-clientes/top-clientes.component';

export const gerenteRoutes: Routes = [
  { path: 'gerente', redirectTo: 'gerente/inicio' },
  {
    path: 'gerente/inicio',
    component: TelaInicioComponent,
    canActivate: [AuthGuard],
    data: { role: ['GERENTE'] },
  },
  {
    path: 'gerente/top-clientes',
    component: TopClientesComponent,
    canActivate: [AuthGuard],
    data: { role: ['GERENTE'] },
  },
  {
    path: 'gerente/clientes',
    component: ListarClientesComponent,
    canActivate: [AuthGuard],
    data: { role: ['GERENTE'] },
  },
  {
    path: 'gerente/clientes/:id',
    component: DetalheClienteComponent,
    canActivate: [AuthGuard],
    data: { role: ['GERENTE'] },
  },
  {
    path: 'gerente/consultar-cliente',
    component: ConsultarClienteComponent,
    canActivate: [AuthGuard],
    data: { role: ['GERENTE'] },
  },
];
