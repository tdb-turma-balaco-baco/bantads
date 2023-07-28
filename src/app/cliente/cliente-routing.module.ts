import {Routes} from '@angular/router';
import {AuthGuard} from '../auth/auth.guard';
import {AlterarPerfilComponent} from './alterar-perfil/alterar-perfil.component';
import {DepositarComponent} from './depositar/depositar.component';
import {ExtratoComponent} from './extrato/extrato.component';
import {SacarComponent} from './sacar/sacar.component';
import {TelaInicioComponent} from './tela-inicio/tela-inicio.component';
import {TransferirComponent} from './transferir/transferir.component';
import {UserType} from "../shared/models/user-type.enum";

const VALID_ROUTE_ROLE = {role: [UserType.CLIENT]}

export const ClienteRoutes: Routes = [
  { path: 'cliente', redirectTo: 'cliente/inicio' },
  {
    path: 'cliente/inicio',
    component: TelaInicioComponent,
    canActivate: [AuthGuard],
    data: VALID_ROUTE_ROLE,
  },

  { path: 'sacar', redirectTo: 'cliente/sacar' },
  {
    path: 'cliente/sacar',
    component: SacarComponent,
    canActivate: [AuthGuard],
    data: VALID_ROUTE_ROLE,
  },

  { path: 'depositar', redirectTo: 'cliente/depositar' },
  {
    path: 'cliente/depositar',
    component: DepositarComponent,
    canActivate: [AuthGuard],
    data: VALID_ROUTE_ROLE,
  },

  { path: 'transferir', redirectTo: 'cliente/transferir' },
  {
    path: 'cliente/transferir',
    component: TransferirComponent,
    canActivate: [AuthGuard],
    data: VALID_ROUTE_ROLE,
  },

  { path: 'extrato', redirectTo: 'cliente/extrato' },
  {
    path: 'cliente/extrato',
    component: ExtratoComponent,
    canActivate: [AuthGuard],
    data: VALID_ROUTE_ROLE,
  },

  { path: 'perfil', redirectTo: 'cliente/perfil' },
  {
    path: 'cliente/perfil',
    component: AlterarPerfilComponent,
    canActivate: [AuthGuard],
    data: VALID_ROUTE_ROLE,
  },
];
