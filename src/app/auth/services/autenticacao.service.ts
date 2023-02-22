import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login, Usuario } from 'src/app/shared';
import { httpOptions } from 'src/app/shared/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  BASE_URL = environment.apiURL;
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
    return this.httpClient.post<Usuario>(`${this.BASE_URL}/auth/login`, JSON.stringify(login), httpOptions);
  }

  logout() {
    localStorage.removeItem(this.CHAVE_LS);
  }
}
