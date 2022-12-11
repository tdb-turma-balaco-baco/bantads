import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Estado } from '../models';

@Injectable({
  providedIn: 'root',
})
export class EstadoService {
  BASE_URL = environment.apiURL + 'estados/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  listarTodosEstados() {
    return this.httpClient.get<Estado[]>(this.BASE_URL, this.httpOptions);
  }

  buscarEstadoPorId(id: number) {
    return this.httpClient.get<Estado>(this.BASE_URL + id, this.httpOptions);
  }
}
