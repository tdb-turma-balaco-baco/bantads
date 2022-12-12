import { Injectable } from '@angular/core';
import { Cliente } from 'src/app/shared/models/cliente/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class GerenteService {

  constructor() { }

  listarClientesPendentes(): Cliente[] {
    let clientes: Cliente[] = [];
    let cliente: Cliente = {
      CPF: '11111111111',
      salario: 123456.78,
      nome: 'Carlos Alberto Nobrega',
    };
    clientes.push(cliente);
    cliente = { CPF: '11111111111', salario: 123456.73, nome: 'Carlos2' };
    clientes.push(cliente);
    cliente = { CPF: '11111111111', salario: 123456.74, nome: 'Carlos3' };
    clientes.push(cliente);
    cliente = { CPF: '11111111111', salario: 123456.75, nome: 'Carlos4' };
    clientes.push(cliente);
    cliente = { CPF: '11111111111', salario: 123456.76, nome: 'Carlos5' };
    clientes.push(cliente);
    cliente = { CPF: '11111111111', salario: 123456.77, nome: 'Carlos6' };
    clientes.push(cliente);
    cliente = { CPF: '11111111111', salario: 123456.78, nome: 'Carlos7' };
    clientes.push(cliente);
    cliente = { CPF: '11111111111', salario: 123456.79, nome: 'Carlos8' };
    clientes.push(cliente);

    return clientes;
  }
}
