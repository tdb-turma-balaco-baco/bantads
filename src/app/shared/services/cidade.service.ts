import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cidade } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {
  BASE_URL = environment.apiURL + 'cidades/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  listarTodasCidades() {
    return this.httpClient.get<Cidade[]>(this.BASE_URL, this.httpOptions);
  }

  buscarCidadePorId(id: number) {
    return this.httpClient.get<Cidade>(this.BASE_URL + id, this.httpOptions);
  }

  // TODO: Essa implementação não é possível via json-server, só com a criação das APIs
  listarCidadesPorEstado(idEstado: number) {
    const cidades: Cidade[] = [];
    cidades.push(new Cidade());
    return cidades;
  }
}
