import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AutenticacaoService } from 'src/app/auth/services/autenticacao.service';
import { Cliente, Usuario } from 'src/app/shared';
import { ClienteService } from '../services';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-tela-inicio',
  templateUrl: './tela-inicio.component.html',
})
export class TelaInicioComponent {
  public usuario: Usuario = new Usuario();
  public cliente$!: Observable<Cliente>;

  constructor(
    private legado_autenticacao: AutenticacaoService,
    private clienteService: ClienteService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.usuario = this.legado_autenticacao.usuarioAutenticado;
    this.authService.isLoggedIn;

    if (this.usuario.CPF) {
      this.cliente$ = this.clienteService.buscarClientePorCPF(this.usuario.CPF)
    }
  }
}
