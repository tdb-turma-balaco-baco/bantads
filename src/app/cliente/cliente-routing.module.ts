import { Routes } from '@angular/router';
import { DepositarComponent } from './depositar/depositar.component';
import { SacarComponent } from './sacar/sacar.component';
import { TelaInicioComponent } from './tela-inicio/tela-inicio.component';
import { TransferirComponent } from './transferir/transferir.component';

export const ClienteRoutes: Routes = [
  { path: 'cliente', redirectTo: 'cliente/inicio' },
  { path: 'cliente/inicio', component: TelaInicioComponent },

  { path: 'sacar', redirectTo: 'cliente/sacar' },
  { path: 'cliente/sacar', component: SacarComponent },

  { path: 'depositar', redirectTo: 'cliente/depositar' },
  { path: 'cliente/depositar', component: DepositarComponent },

  { path: 'transferir', redirectTo: 'cliente/transferir' },
  { path: 'cliente/transferir', component: TransferirComponent }
];
