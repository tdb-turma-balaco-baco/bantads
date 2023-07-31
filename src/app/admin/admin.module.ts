import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminInicioComponent } from './inicio/admin-inicio.component';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RelatorioClientes } from './relatorio-clientes/relatorio-clientes.component';
import { EditarGerenteComponent } from './editar-gerente/editar-gerente.component';
import { SharedModule } from '../shared';
import { IConfig, NgxMaskModule } from 'ngx-mask';
export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    AdminInicioComponent,
    RelatorioClientes,
    EditarGerenteComponent,
  ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        SharedModule,
        NgxMaskModule.forRoot(),
        ReactiveFormsModule,
    ],
})
export class AdminModule {}
