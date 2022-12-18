import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from 'src/app/shared';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GerenteService {
  CLIENTE_API = environment.apiURL + 'clientes';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  }

  constructor(private httpClient: HttpClient) { }

  listarClientesPendentesAprovacao() {
    return this.httpClient.get<Cliente[]>(`${this.CLIENTE_API}?situacaoConta=PENDENTE`, this.httpOptions);
  }

  aprovarAberturaConta(cliente: Cliente) {
    cliente.situacaoConta = "ATIVA";
    return this.httpClient.put<Cliente>(`${this.CLIENTE_API}/${cliente.id}`, cliente, this.httpOptions);
  }

  recusarAberturaConta(cliente: Cliente) {
    cliente.situacaoConta = "RECUSADA";
    return this.httpClient.put<Cliente>(`${this.CLIENTE_API}/${cliente.id}`, cliente, this.httpOptions);
  }

  listarTopClientesPorSaldo() {
    if (environment.featureFlagJsonServer) {
      return this.httpClient.get<Cliente[]>(`${this.CLIENTE_API}?conta.saldo_gte=0&_sort=conta.saldo&_order=desc&_limit=5`, this.httpOptions);
    } else {
      return this.httpClient.get<Cliente[]>(`${this.CLIENTE_API}`, this.httpOptions); // TODO: Atualizar com o endpoint correto
    }
  }

  listarClientesPorGerenteId(idGerente: number) {
    return this.httpClient.get<Cliente[]>(`${this.CLIENTE_API}?conta.gerente.id=${idGerente}`, this.httpOptions);
  }
}
