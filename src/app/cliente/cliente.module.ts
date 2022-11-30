import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaInicioComponent } from './tela-inicio/tela-inicio.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TelaInicioComponent],
  imports: [CommonModule, RouterModule],
})
export class ClienteModule {}
