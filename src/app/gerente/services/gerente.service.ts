import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente, Usuario } from 'src/app/shared';
import { httpOptions } from 'src/app/shared/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GerenteService {
  CLIENTE_API = environment.apiURL + 'cliente';
  GERENTE_API = environment.apiURL + 'gerente';

  constructor(private httpClient: HttpClient) { }

  listarClientesPendentesAprovacao(usuario: Usuario) {
    return this.httpClient.get<Cliente[]>(`${this.GERENTE_API}/${usuario.CPF}/pendente`, httpOptions);
  }

  aprovarAberturaConta(cliente: Cliente) {
    return this.httpClient.put<Cliente>(`${this.CLIENTE_API}/aprovar/${cliente.conta?.id}`, cliente, httpOptions);
  }

  recusarAberturaConta(cliente: Cliente, motivoRecusa: string) {
    cliente.conta!.motivoRecusa = motivoRecusa;
    return this.httpClient.put<Cliente>(`${this.CLIENTE_API}/recusar/${cliente.conta?.id}`, cliente, httpOptions);
  }

  listarTopClientesPorSaldo() {
    return this.httpClient.get<Cliente[]>(`${this.GERENTE_API}/top/saldo`, httpOptions);
  }

  listarClientesPorGerenteCpf(cpf: string) {
    return this.httpClient.get<Cliente[]>(`${this.GERENTE_API}/${cpf}/clientes`, httpOptions);
  }
}
