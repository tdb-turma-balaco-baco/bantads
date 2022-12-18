import { Injectable } from '@angular/core';
import { UrlSegment } from '@angular/router';
import { Cliente } from 'src/app/shared';
import { Gerente } from 'src/app/shared/models/gerente/gerente.model';



@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }


  listarTodosGerentes(): Gerente[] {
    let gerentes: Gerente[] = [];
    let gerente: Gerente = { "CPF": "00000000", "nome": "Lorem Palhaço", "perfil": "GERENTE", "email": "testedois@outlook.com", "telefone": "392083222", "clientes": ['Um', 'Dois'] };
    gerentes.push(gerente)
    gerente = { "CPF": "111111", "nome": "BANCO CHIQUE", "perfil": "GERENTE", "email": "testedois@outlook.com", "telefone": "392083222" };
    gerentes.push(gerente)
    gerente = { "CPF": "111111", "nome": "Banco Chique", "perfil": "GERENTE", "email": "testedois@outlook.com", "telefone": "392083222" };
    gerentes.push(gerente)
    gerente = { "CPF": "111111", "nome": "Lorem TAnso", "perfil": "GERENTE", "email": "testedois@outlook.com", "telefone": "392083222" };
    gerentes.push(gerente)
    gerente = { "CPF": "111111", "nome": "Lorem Pepo", "perfil": "GERENTE", "email": "testedois@outlook.com", "telefone": "392083222" };
    gerentes.push(gerente)
    gerente = { "CPF": "111111", "nome": "Lorem BADS", "perfil": "GERENTE", "email": "testedois@outlook.com", "telefone": "392083222" };
    gerentes.push(gerente)
    gerente = { "CPF": "111111", "nome": "Banco WESA", "perfil": "GERENTE", "email": "testedois@outlook.com", "telefone": "392083222" };
    gerentes.push(gerente)

    return gerentes;
  }

  listarTodosClientes(): Cliente[]{
    let clientes: Cliente[] = [];
    let cliente: Cliente = {"CPF":"11111111111","salario":123456.78,"nome":"Carlos Alberto Nobrega"};
    clientes.push(cliente)
    cliente = {"CPF":"11111111111","salario":123456.73,"nome":"Carlos2"};
    clientes.push(cliente)
    cliente = {"CPF":"11111111111","salario":123456.74,"nome":"Carlos3"};
    clientes.push(cliente)
    cliente = {"CPF":"11111111111","salario":123456.75,"nome":"Carlos4"};
    clientes.push(cliente)
    cliente = {"CPF":"11111111111","salario":123456.76,"nome":"Carlos5"};
    clientes.push(cliente)
    cliente = {"CPF":"11111111111","salario":123456.77,"nome":"Carlos6"};
    clientes.push(cliente)
    cliente = {"CPF":"11111111111","salario":123456.78,"nome":"Carlos7"};
    clientes.push(cliente)
    cliente = {"CPF":"11111111111","salario":123456.79,"nome":"Carlos8"};
    clientes.push(cliente)

    return clientes;
  }

}
