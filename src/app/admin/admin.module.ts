import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaInicioComponent } from './tela-inicio/tela-inicio.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TelaRlclientesComponent } from './tela-rlclientes/tela-rlclientes.component';



@NgModule({
  declarations: [
    TelaInicioComponent,
    TelaRlclientesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class AdminModule { }
