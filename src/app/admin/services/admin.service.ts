import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente, Gerente } from 'src/app/shared';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  GERENTE_API = environment.apiURL + 'gerentes/';
  CLIENTE_API = environment.apiURL + 'clientes/'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  }

  constructor(private httpClient: HttpClient) { }

  listarTodosClientes() {
    return this.httpClient.get<Cliente[]>(`${this.CLIENTE_API}`, this.httpOptions);
  }

  listarTodosGerentes() {
    return this.httpClient.get<Gerente[]>(`${this.GERENTE_API}`, this.httpOptions);
  }

  buscarPorId(idGerente: number) {
    return this.httpClient.get<Gerente>(this.GERENTE_API + idGerente, this.httpOptions);
  }

  inserirGerente(gerente: Gerente) {
    return this.httpClient.post<Gerente>(`${this.GERENTE_API}`, JSON.stringify(gerente), this.httpOptions);

  }

  removerGerente(idGerente: number) {
    return this.httpClient.delete<Gerente>(this.GERENTE_API + idGerente, this.httpOptions);
  }

  alterarGerente(gerente: Gerente) {
    return this.httpClient.put<Gerente>(this.GERENTE_API + gerente.id, JSON.stringify(gerente), this.httpOptions)
  }
}
