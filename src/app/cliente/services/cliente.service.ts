import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Cliente, Movimentacao, OperacaoEnum, RegistroExtrato} from 'src/app/shared';
import { httpOptions } from 'src/app/shared/http';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  CLIENTE_URL = environment.apiURL + '/client';
  MOVIMENTACAO_URL = environment.apiURL;

  constructor(private httpClient: HttpClient) {
  }

  listarTodos() {
    return this.httpClient.get<Cliente[]>(`${this.CLIENTE_URL}/list`, httpOptions);
  }

  buscarClientePorCPF(cpf: string) {
    return this.httpClient.get<Cliente>(`${this.CLIENTE_URL}/${cpf}/details`, httpOptions);
  }

  inserir(cliente: Cliente) {
    return this.httpClient.post<Cliente>(`${this.CLIENTE_URL}/save`, JSON.stringify(cliente), httpOptions);
  }

  listarExtratosPorData(dataInicio: Date, dataFim: Date, cliente: Cliente) {
    const request = {
      dataInicio,
      dataFim,
    }
    return this.httpClient.post<RegistroExtrato[]>(`${this.MOVIMENTACAO_URL}/${cliente.conta!.id}/transactionsHistory`, JSON.stringify(request), httpOptions);
  }

  inserirMovimentacao(movimentacao: Movimentacao) {
    let endpoint: string;

    switch(movimentacao.operacao) {
      case (OperacaoEnum.TRANSFERENCIA):
        endpoint = `${this.MOVIMENTACAO_URL}/transaction/transfer`;
        break;
      case (OperacaoEnum.DEPOSITO):
        endpoint = `${this.MOVIMENTACAO_URL}/transaction/deposit`;
        break;
      case (OperacaoEnum.SAQUE):
        endpoint = `${this.MOVIMENTACAO_URL}/transaction/withdraw`;
        break;
      default:
        endpoint = this.MOVIMENTACAO_URL;
        break;
    }

    console.log(JSON.stringify(movimentacao));

    return this.httpClient.post<Movimentacao>(endpoint, JSON.stringify(movimentacao), httpOptions);
  }

  atualizar(cliente: Cliente) {
    return this.httpClient.put<Cliente>(`${this.CLIENTE_URL}/update`, JSON.stringify(cliente), httpOptions);
  }
}
