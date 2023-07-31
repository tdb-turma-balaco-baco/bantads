import { Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { ConsultarClienteComponent } from './consultar-cliente/consultar-cliente.component';
import { DetalheClienteComponent } from './detalhe-cliente/detalhe-cliente.component';
import { ListarClientesComponent } from './listar-clientes/listar-clientes.component';
import { TelaInicioComponent } from './tela-inicio';
import { TopClientesComponent } from './top-clientes/top-clientes.component';
import {UserType} from "../shared/models/user-type.enum";

const VALID_ROUTE_ROLE = {role: [UserType.MANAGER]};
export const gerenteRoutes: Routes = [
  { path: 'gerente', redirectTo: 'gerente/inicio' },
  {
    path: 'gerente/inicio',
    component: TelaInicioComponent,
    canActivate: [AuthGuard],
    data: VALID_ROUTE_ROLE,
  },
  {
    path: 'gerente/top-clientes',
    component: TopClientesComponent,
    canActivate: [AuthGuard],
    data: VALID_ROUTE_ROLE,
  },
  {
    path: 'gerente/clientes',
    component: ListarClientesComponent,
    canActivate: [AuthGuard],
    data: VALID_ROUTE_ROLE,
  },
  {
    path: 'gerente/clientes/:id',
    component: DetalheClienteComponent,
    canActivate: [AuthGuard],
    data: VALID_ROUTE_ROLE,
  },
  {
    path: 'gerente/consultar-cliente',
    component: ConsultarClienteComponent,
    canActivate: [AuthGuard],
    data: VALID_ROUTE_ROLE,
  },
];
