import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/auth/services';
import { Cliente, Movimentacao, Usuario } from 'src/app/shared';
import { ClienteService } from '../services';

@Component({
  selector: 'app-transferir',
  templateUrl: './transferir.component.html',
})
export class TransferirComponent {
  @ViewChild('formTransferir') formTransferir!: NgForm;
  transferencia: Movimentacao = new Movimentacao();
  usuario: Usuario = new Usuario();
  cliente: Cliente = new Cliente();

  constructor(
    private autenticacaoUsuario: AutenticacaoService,
    private clienteService: ClienteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.usuario = this.autenticacaoUsuario.usuarioAutenticado;
    this.clienteService.buscarClientePorCPF(this.usuario.CPF!).subscribe({
      next: (data) => {
        if (data !== null) {
          this.cliente = data;
        }
      },
    });
  }

  transferir(): void {
    if (this.formTransferir.form.valid) {
      this.transferencia.operacao = 'TRANSFERENCIA';
      this.transferencia.idContaOrigem = this.cliente.conta?.id;

      this.clienteService.inserirMovimentacao(this.transferencia).subscribe({
        next: (data) => {
          if (data !== null) {
            this.router.navigate(['/']);
          }
        },
      });
    }
  }
}
