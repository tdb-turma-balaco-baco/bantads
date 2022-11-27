import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaInicioComponent } from './tela-inicio/tela-inicio.component';
import { SharedModule } from '../shared';



@NgModule({
  declarations: [
    TelaInicioComponent
    
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class GerenteModule { }
