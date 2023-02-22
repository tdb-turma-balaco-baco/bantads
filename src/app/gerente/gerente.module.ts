import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TelaInicioComponent} from './tela-inicio';
import {SharedModule} from '../shared';
import {TopClientesComponent} from './top-clientes/top-clientes.component';
import {ListarClientesComponent} from './listar-clientes/listar-clientes.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {ConsultarClienteComponent} from './consultar-cliente/consultar-cliente.component';
import {NgxCurrencyModule} from 'ngx-currency';
import {NgxMaskModule} from 'ngx-mask';
import {DetalheClienteComponent} from './detalhe-cliente/detalhe-cliente.component';
import {ModalRecusarContaComponent} from './modal-recusar-conta';

@NgModule({
  declarations: [
    TelaInicioComponent,
    TopClientesComponent,
    ListarClientesComponent,
    ConsultarClienteComponent,
    DetalheClienteComponent,
    ModalRecusarContaComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    NgxCurrencyModule,
    NgxMaskModule
  ],
})
export class GerenteModule {
}
