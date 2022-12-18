import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpfPipe } from './pipes/cpf.pipe';
import { BuscarClientesPipe } from './pipes/buscar-clientes.pipe';

@NgModule({
  declarations: [CpfPipe, BuscarClientesPipe],
  imports: [CommonModule],
  exports: [CpfPipe, BuscarClientesPipe],
})
export class SharedModule {}
