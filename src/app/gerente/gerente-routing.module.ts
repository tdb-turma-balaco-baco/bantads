import { Routes } from '@angular/router';
import { ConsultarClienteComponent } from './consultar-cliente/consultar-cliente.component';
import { DetalheClienteComponent } from './detalhe-cliente/detalhe-cliente.component';
import { ListarClientesComponent } from './listar-clientes/listar-clientes.component';
import { TelaInicioComponent } from './tela-inicio/tela-inicio.component';
import { TopClientesComponent } from './top-clientes/top-clientes.component';

export const gerenteRoutes: Routes = [
  { path: 'gerente', redirectTo: 'gerente/inicio' },
  { path: 'gerente/inicio', component: TelaInicioComponent },
  { path: 'gerente/top-clientes', component: TopClientesComponent },
  { path: 'gerente/clientes', component: ListarClientesComponent },
  { path: 'gerente/clientes/:id', component: DetalheClienteComponent },
  { path: 'gerente/consultar-cliente', component: ConsultarClienteComponent },
];
