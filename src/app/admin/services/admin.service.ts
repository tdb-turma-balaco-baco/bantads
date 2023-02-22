import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente, Gerente } from 'src/app/shared';
import { httpOptions } from 'src/app/shared/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  GERENTE_API = environment.apiURL + '/manager';
  CLIENTE_API = environment.apiURL + '/cliente'

  constructor(private httpClient: HttpClient) { }

  listarTodosClientes() {
    return this.httpClient.get<Cliente[]>(this.CLIENTE_API, httpOptions);
  }

  listarTodosGerentes() {
    return this.httpClient.get<Gerente[]>(`${this.GERENTE_API}/list`, httpOptions);
  }

  buscarPorId(idGerente: number) {
    return this.httpClient.get<Gerente>(this.GERENTE_API + idGerente, httpOptions);
  }

  inserirGerente(gerente: Gerente) {
    return this.httpClient.post<Gerente>(`${this.GERENTE_API}/save`, JSON.stringify(gerente), httpOptions);
  }

  removerGerente(cpf: string) {
    return this.httpClient.delete<Gerente>(`${this.GERENTE_API}/${cpf}/remove`, httpOptions);
  }

  alterarGerente(gerente: Gerente) {
    return this.httpClient.put<Gerente>(`${this.GERENTE_API}/update`, JSON.stringify(gerente), httpOptions)
  }
}
