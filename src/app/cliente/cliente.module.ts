import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TelaInicioComponent} from './tela-inicio/tela-inicio.component';
import {RouterModule} from '@angular/router';
import {SacarComponent} from './sacar/sacar.component';
import {DepositarComponent} from './depositar/depositar.component';
import {TransferirComponent} from './transferir/transferir.component';
import {NgxCurrencyModule} from 'ngx-currency';
import {FormsModule} from '@angular/forms';
import {ExtratoComponent} from './extrato';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxMaskModule} from 'ngx-mask';
import {AlterarPerfilComponent} from './alterar-perfil/alterar-perfil.component';
import {SharedModule} from '../shared';

@NgModule({
  declarations: [
    TelaInicioComponent,
    SacarComponent,
    DepositarComponent,
    TransferirComponent,
    ExtratoComponent,
    AlterarPerfilComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgbModule,
    NgxCurrencyModule,
    NgxMaskModule.forRoot(),
    SharedModule,
  ],
})
export class ClienteModule {
}
