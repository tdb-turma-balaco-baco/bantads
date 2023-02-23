import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AutenticacaoService } from 'src/app/auth/services/autenticacao.service';
import { Cliente, Usuario } from 'src/app/shared';
import { ClienteService } from '../services';

@Component({
  selector: 'app-tela-inicio',
  templateUrl: './tela-inicio.component.html',
})
export class TelaInicioComponent {
  public usuario: Usuario = new Usuario();
  public cliente$!: Observable<Cliente>;

  constructor(
    private authService: AutenticacaoService,
    private clienteService: ClienteService
  ) {}

  ngOnInit() {
    this.usuario = this.authService.usuarioAutenticado;

    if (this.usuario.CPF) {
      this.cliente$ = this.clienteService.buscarClientePorCPF(this.usuario.CPF)
    }
  }
}
