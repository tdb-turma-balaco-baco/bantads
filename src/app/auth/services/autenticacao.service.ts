import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login, Usuario } from 'src/app/shared';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  BASE_URL = environment.apiURL + 'usuarios';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  CHAVE_LS = 'user-session';

  constructor(private httpClient: HttpClient) {}

  public get usuarioAutenticado(): Usuario {
    const usuario = localStorage.getItem(this.CHAVE_LS);
    return usuario ? JSON.parse(usuario) : null;
  }

  public set usuarioAutenticado(usuario: Usuario) {
    localStorage.setItem(this.CHAVE_LS, JSON.stringify(usuario));
  }

  login(login: Login) {
    return this.httpClient.get<Usuario[]>(
      `${this.BASE_URL}?login=${login.login}&senha=${login.senha}`,
      this.httpOptions
    );
  }

  logout() {
    localStorage.removeItem(this.CHAVE_LS);
  }
}
