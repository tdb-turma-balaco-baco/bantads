import { Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { EditarGerenteComponent } from './editar-gerente/editar-gerente.component';
import { AdminInicioComponent } from './inicio/admin-inicio.component';
import { RelatorioClientes } from './relatorio-clientes/relatorio-clientes.component';
import {UserType} from "../shared/models/user-type.enum";

const VALID_ROUTE_ROLE = {role: [UserType.ADMIN]};

export const adminRoutes: Routes = [
  {
    path: 'admin',
    redirectTo: 'admin/inicio',
  },
  {
    path: 'admin/inicio',
    component: AdminInicioComponent,
    canActivate: [AuthGuard],
    data: VALID_ROUTE_ROLE,
  },
  {
    path: 'admin/clientes',
    component: RelatorioClientes,
    canActivate: [AuthGuard],
    data: VALID_ROUTE_ROLE,
  },
  {
    path: 'admin/gerente/:id',
    component: EditarGerenteComponent,
    canActivate: [AuthGuard],
    data: VALID_ROUTE_ROLE,
  },
  {
    path: 'admin/gerente',
    component: EditarGerenteComponent,
    canActivate: [AuthGuard],
    data: VALID_ROUTE_ROLE,
  },
];
