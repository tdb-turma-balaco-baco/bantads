import { Routes } from '@angular/router';
import { AdminInicioComponent } from './inicio/admin-inicio.component';
import { RelatorioClientes } from './relatorio-clientes/relatorio-clientes.component';

export const adminRoutes: Routes = [
  { path: 'admin', redirectTo: 'admin/inicio' },
  { path: 'admin/inicio', component: AdminInicioComponent },
  { path: 'relatorio-clientes', redirectTo: 'admin/relatorio-clientes' },
  { path: 'admin/relatorio-clientes', component: RelatorioClientes },
];
