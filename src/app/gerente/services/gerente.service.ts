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
    return this.httpClient.get<Cliente[]>(`${this.CLIENTE_API}?conta.situacaoConta=PENDENTE`, this.httpOptions);
  }

  aprovarAberturaConta(cliente: Cliente) {
    cliente.conta!.situacaoConta = "ATIVA";
    return this.httpClient.put<Cliente>(`${this.CLIENTE_API}/${cliente.id}`, cliente, this.httpOptions);
  }

  recusarAberturaConta(cliente: Cliente, motivoRecusa: string) {
    cliente.conta!.situacaoConta = "RECUSADA";
    cliente.conta!.motivoRecusa = motivoRecusa;
    cliente.conta!.timestampRecusa = new Date();
    return this.httpClient.put<Cliente>(`${this.CLIENTE_API}/${cliente.id}`, cliente, this.httpOptions);
  }

  listarTopClientesPorSaldo() {
    return this.httpClient.get<Cliente[]>(`${this.CLIENTE_API}?conta.saldo_gte=0&_sort=conta.saldo&_order=desc&_limit=5`, this.httpOptions);
  }

  listarClientesPorGerenteId(idGerente: number) {
    return this.httpClient.get<Cliente[]>(`${this.CLIENTE_API}?conta.gerente.id=${idGerente}`, this.httpOptions);
  }
}
