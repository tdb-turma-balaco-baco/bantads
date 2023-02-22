import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Cliente, Movimentacao, RegistroExtrato, Usuario} from 'src/app/shared';
import { httpOptions } from 'src/app/shared/http';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  CLIENTE_URL = environment.apiURL + 'cliente';
  MOVIMENTACAO_URL = environment.apiURL + 'movimentacao';

  constructor(private httpClient: HttpClient) {
  }

  listarTodos() {
    return this.httpClient.get<Cliente[]>(this.CLIENTE_URL, httpOptions);
  }

  buscarClientePorCPF(cpf: string) {
    return this.httpClient.get<Cliente>(`${this.CLIENTE_URL}/${cpf}`, httpOptions);
  }

  inserir(cliente: Cliente) {
    return this.httpClient.post<Cliente>(
      this.CLIENTE_URL,
      JSON.stringify(cliente),
      httpOptions
    );
  }

  listarExtratosPorData(dataInicio: Date, dataFim: Date, usuario: Usuario) {
    const request = {
      dataInicio,
      dataFim,
      usuario
    }
    return this.httpClient.post<RegistroExtrato[]>(`${this.MOVIMENTACAO_URL}/extrato`, JSON.stringify(request), httpOptions);
  }

  inserirMovimentacao(movimentacao: Movimentacao) {
    return this.httpClient.post<Movimentacao>(this.MOVIMENTACAO_URL, JSON.stringify(movimentacao), httpOptions);
  }

  atualizar(cliente: Cliente) {
    return this.httpClient.put<Cliente>(`${this.CLIENTE_URL}/${cliente.id!}`, JSON.stringify(cliente), httpOptions);
  }
}
