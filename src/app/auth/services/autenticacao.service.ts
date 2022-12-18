import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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

  //exibirMenuLateral = new EventEmitter<boolean>();

  constructor(private httpClient: HttpClient) {}

  public get usuarioAutenticado(): Usuario {
    const usuario = localStorage.getItem(this.CHAVE_LS);
    return usuario ? JSON.parse(usuario) : null;
  }

  public set usuarioAutenticado(usuario: Usuario) {
    localStorage.setItem(this.CHAVE_LS, JSON.stringify(usuario));
    //this.exibirMenuLateral.emit(true);
  }

  login(login: Login) {
    if (environment.featureFlagJsonServer) {
      return this.httpClient.get<Usuario>(
        // `${this.BASE_URL}?login=${login.login}&senha=${login.senha}`, **forma "ideal"
        this.BASE_URL + '/2', // PRECISA ALTERAR PARA FUNCIONAR CORRETAMENTE, LIMITAÇÃO JSON-SERVER
        this.httpOptions

      );
    } else {
      return this.httpClient.post<Usuario>(
        this.BASE_URL,
        this.login,
        this.httpOptions
      );
    }
  }

  logout() {
    localStorage.removeItem(this.CHAVE_LS);
    //this.exibirMenuLateral.emit(false);
  }

}
