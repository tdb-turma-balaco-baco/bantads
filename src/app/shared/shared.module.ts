import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CpfPipe} from './pipes';
import {BuscarClientesPipe} from './pipes';
import {CepPipe} from './pipes';
import {TelefonePipe} from './pipes';

@NgModule({
  declarations: [CpfPipe, BuscarClientesPipe, CepPipe, TelefonePipe],
  imports: [CommonModule],
  exports: [CpfPipe, BuscarClientesPipe, CepPipe, TelefonePipe],
})
export class SharedModule {
}
