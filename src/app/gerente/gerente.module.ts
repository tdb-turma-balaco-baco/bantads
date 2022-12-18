import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaInicioComponent } from './tela-inicio/tela-inicio.component';
import { SharedModule } from '../shared';
import { TopClientesComponent } from './top-clientes/top-clientes.component';
import { ListarClientesComponent } from './listar-clientes/listar-clientes.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TelaInicioComponent,
    TopClientesComponent,
    ListarClientesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule
  ]
})
export class GerenteModule { }
