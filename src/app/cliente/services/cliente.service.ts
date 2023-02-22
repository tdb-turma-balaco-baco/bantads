import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Cliente, ContaBancaria, RegistroExtrato} from 'src/app/shared';
import { httpOptions } from 'src/app/shared/http';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  BASE_URL = environment.apiURL + 'cliente';
  URL_MOVIMENTACOES = environment.apiURL + 'movimentacao';

  constructor(private httpClient: HttpClient) {
  }

  listarTodos() {
    return this.httpClient.get<Cliente[]>(this.BASE_URL, httpOptions);
  }

  buscarClientePorCPF(cpf: string) {
    return this.httpClient.get<Cliente>(`${this.BASE_URL}/${cpf}`, httpOptions);
  }

  inserir(cliente: Cliente) {
    return this.httpClient.post<Cliente>(
      this.BASE_URL,
      JSON.stringify(cliente),
      httpOptions
    );
  }

  listarExtratosPordata(dataInicio: Date, dataFim: Date) {
    return this.httpClient.get<RegistroExtrato[]>(this.URL_MOVIMENTACOES + "?_sort=timestamp&_order=asc&timestamp_gte=" + dataInicio.toISOString() + "&timestamp_lte=" + dataFim.toISOString(), httpOptions);
  }

  inserirmovimentacao(movimentacao: RegistroExtrato) {
    const movimentacaoJSON = JSON.stringify(movimentacao);
    return this.httpClient.post<RegistroExtrato>(this.URL_MOVIMENTACOES, movimentacaoJSON, httpOptions);
  }

  atualizar(cliente: Cliente) {
    return this.httpClient.put<Cliente>(`${this.BASE_URL}/${cliente.id!}`, JSON.stringify(cliente), httpOptions);
  }
}
