import { Injectable } from '@angular/core';
import { UrlSegment } from '@angular/router';
import { Gerente } from 'src/app/shared/models/gerente/gerente.model';



@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }


  listarTodos(): Gerente[] {
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

}
