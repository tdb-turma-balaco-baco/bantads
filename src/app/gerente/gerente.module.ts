import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaInicioComponent } from './tela-inicio/tela-inicio.component';
import { SharedModule } from '../shared';
import { TopClientesComponent } from './top-clientes/top-clientes.component';



@NgModule({
  declarations: [
    TelaInicioComponent,
    TopClientesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class GerenteModule { }
