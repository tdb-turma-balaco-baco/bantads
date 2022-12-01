import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaInicioComponent } from './tela-inicio/tela-inicio.component';
import { RouterModule } from '@angular/router';
import { SacarComponent } from './sacar/sacar.component';
import { DepositarComponent } from './depositar/depositar.component';
import { TransferirComponent } from './transferir/transferir.component';
import { NgxCurrencyModule } from 'ngx-currency';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TelaInicioComponent,
    SacarComponent,
    DepositarComponent,
    TransferirComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgxCurrencyModule
  ]
})
export class ClienteModule { }
