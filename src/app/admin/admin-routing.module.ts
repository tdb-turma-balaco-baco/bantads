import { Routes } from '@angular/router';
import { EditarGerenteComponent } from './editar-gerente/editar-gerente.component';
import { AdminInicioComponent } from './inicio/admin-inicio.component';
import { RelatorioClientes } from './relatorio-clientes/relatorio-clientes.component';

export const adminRoutes: Routes = [
  { path: 'admin', redirectTo: 'admin/inicio' },
  { path: 'admin/inicio', component: AdminInicioComponent },
  { path: 'relatorio-clientes', redirectTo: 'admin/relatorio-clientes' },
  { path: 'admin/relatorio-clientes', component: RelatorioClientes },
  { path: 'admin/editar-gerentes/:id', component: EditarGerenteComponent},
  { path: 'admin/novo', component: EditarGerenteComponent}
];
