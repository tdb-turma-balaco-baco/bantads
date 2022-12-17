import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/shared';
import { Cliente } from 'src/app/shared/models/cliente/cliente.model';
import { RegistroExtrato } from 'src/app/shared/models/registro-extrato/registro-extrato.model';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  constructor() {}


  listarExtratosPordata( dataInicio : Date, dataFim : Date): RegistroExtrato[] {
    //Post pro back com Datas e ID ?cliente?
    let extratos: RegistroExtrato[] = [];
    let extrato: RegistroExtrato = {
      timestamp: new Date(1,10,25),
      operacao: undefined,
      valor: 1500.35,
      origem: new Usuario("1","Caetano",undefined,undefined,undefined,undefined),
      destino: new Usuario("1","Caetano",undefined,undefined,undefined,undefined)
    }
    extratos.push(extrato);
    if(dataInicio.getDate() === 17){
      extrato = {
        timestamp: new Date(1,10,25),
        operacao: undefined,
        valor: 1500.35,
        origem: new Usuario("1","Pedro",undefined,undefined,undefined,undefined),
        destino: new Usuario("1","Pedro a",undefined,undefined,undefined,undefined)
      }
      extratos.push(extrato);
    }
    return extratos;
  }

  listarTodos(): Cliente[] {
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
