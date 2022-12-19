import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpfPipe } from './pipes/cpf.pipe';
import { BuscarClientesPipe } from './pipes/buscar-clientes.pipe';
import { CepPipe } from './pipes/cep.pipe';
import { TelefonePipe } from './pipes/telefone.pipe';

@NgModule({
  declarations: [CpfPipe, BuscarClientesPipe, CepPipe, TelefonePipe],
  imports: [CommonModule],
  exports: [CpfPipe, BuscarClientesPipe, CepPipe, TelefonePipe],
})
export class SharedModule {}
