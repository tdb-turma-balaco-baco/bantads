import { Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { EditarGerenteComponent } from './editar-gerente/editar-gerente.component';
import { AdminInicioComponent } from './inicio/admin-inicio.component';
import { RelatorioClientes } from './relatorio-clientes/relatorio-clientes.component';

export const adminRoutes: Routes = [
  {
    path: 'admin',
    redirectTo: 'admin/gerentes',
  },
  {
    path: 'admin/gerentes',
    component: AdminInicioComponent,
    canActivate: [AuthGuard],
    data: { role: ['ADMIN'] },
  },
  {
    path: 'admin/relatorio-clientes',
    component: RelatorioClientes,
    canActivate: [AuthGuard],
    data: { role: ['ADMIN'] },
  },
  {
    path: 'admin/editar-gerentes/:id',
    component: EditarGerenteComponent,
    canActivate: [AuthGuard],
    data: { role: ['ADMIN'] },
  },
  {
    path: 'admin/cadastro',
    component: EditarGerenteComponent,
    canActivate: [AuthGuard],
    data: { role: ['ADMIN'] },
  },
];
