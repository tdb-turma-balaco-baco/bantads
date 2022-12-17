import { Pipe, PipeTransform } from '@angular/core';
import { Cliente } from '../models';

@Pipe({
  name: 'buscarClientes'
})
export class BuscarClientesPipe implements PipeTransform {

  transform(clientes: Cliente[], nome: string): Cliente[] {
    if (!clientes || !nome) return clientes;
    return clientes.filter(cliente => cliente.nome?.toLocaleLowerCase().includes(nome));
  }

}
