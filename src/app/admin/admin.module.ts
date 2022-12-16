import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminInicioComponent } from './inicio/admin-inicio.component'
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RelatorioClientes } from './relatorio-clientes/relatorio-clientes.component';



@NgModule({
  declarations: [
    AdminInicioComponent,
    RelatorioClientes
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class AdminModule { }
