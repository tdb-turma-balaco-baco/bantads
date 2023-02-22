import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente, Usuario } from 'src/app/shared';
import { httpOptions } from 'src/app/shared/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GerenteService {
  CLIENTE_API = environment.apiURL + '/client';
  GERENTE_API = environment.apiURL + '/manager';

  constructor(private httpClient: HttpClient) { }

  listarClientesPendentesAprovacao(usuario: Usuario) {
    return this.httpClient.get<Cliente[]>(`${this.GERENTE_API}/${usuario.CPF}/pendingAccounts`, httpOptions);
  }

  aprovarAberturaConta(cliente: Cliente) {
    return this.httpClient.put<Cliente>(`${this.CLIENTE_API}/approve`, JSON.stringify(cliente), httpOptions);
  }

  recusarAberturaConta(cliente: Cliente, motivoRecusa: string) {
    cliente.conta!.motivoRecusa = motivoRecusa;
    return this.httpClient.put<Cliente>(`${this.CLIENTE_API}/reject`, JSON.stringify(cliente), httpOptions);
  }

  listarTopClientesPorSaldo(cpf: string) {
    return this.httpClient.get<Cliente[]>(`${this.GERENTE_API}/${cpf}/topFiveClients`, httpOptions);
  }

  listarClientesPorGerenteCpf(cpf: string) {
    return this.httpClient.get<Cliente[]>(`${this.GERENTE_API}/${cpf}/clients`, httpOptions);
  }
}
