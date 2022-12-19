import { Component } from '@angular/core';
import { AutenticacaoService } from 'src/app/auth/services/autenticacao.service';
import { Cliente, Usuario } from 'src/app/shared';
import { ClienteService } from '../services';

@Component({
  selector: 'app-tela-inicio',
  templateUrl: './tela-inicio.component.html',
  styleUrls: ['./tela-inicio.component.css'],
})
export class TelaInicioComponent {
  public usuario!: Usuario;
  public cliente!: Cliente;

  constructor(
    private authService: AutenticacaoService,
    private clienteService: ClienteService
  ) {
    this.usuario = this.authService.usuarioAutenticado;
    console.log(this.usuario);

    this.clienteService.buscarClientePorId(this.usuario.id!).subscribe({
      next: (cliente) => {
        this.cliente = cliente;
      },
    });
  }
}
