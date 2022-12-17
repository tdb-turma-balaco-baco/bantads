import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from 'src/app/shared/models/cliente/cliente.model';
import { RegistroExtrato } from 'src/app/shared/models/registro-extrato/registro-extrato.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  BASE_URL = environment.apiURL + 'clientes/';
  URL_MOVIMENTACOES = environment.apiURL + 'movimentacoes/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  }

  constructor(private httpClient: HttpClient) {}

  listarTodos() {
    return this.httpClient.get<Cliente[]>(this.BASE_URL, this.httpOptions);
  }

  buscarClientePorId(id: number) {
    return this.httpClient.get<Cliente>(this.BASE_URL + id, this.httpOptions);
  }

  inserir(cliente: Cliente) {
    const clienteJSON = JSON.stringify(cliente);
    return this.httpClient.post<Cliente>(this.BASE_URL, clienteJSON, this.httpOptions);
  }

  listarExtratosPordata( dataInicio : Date, dataFim : Date) {
    //Post pro back com Datas e ID ?cliente?

    return this.httpClient.get<RegistroExtrato[]>(this.URL_MOVIMENTACOES, this.httpOptions);
  }

}
