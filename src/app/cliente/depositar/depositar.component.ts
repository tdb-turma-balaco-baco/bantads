import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/auth/services';
import { Cliente, Movimentacao, Usuario } from 'src/app/shared';
import { ClienteService } from '../services';

@Component({
  selector: 'app-depositar',
  templateUrl: './depositar.component.html',
})
export class DepositarComponent implements OnInit {
  @ViewChild('formDeposito') formDeposito!: NgForm;
  deposito: Movimentacao = new Movimentacao();
  usuario: Usuario = new Usuario();
  cliente!: Cliente;

  constructor(
    private autenticacaoService: AutenticacaoService,
    private clienteService: ClienteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.usuario = this.autenticacaoService.usuarioAutenticado;

    this.clienteService.buscarClientePorCPF(this.usuario.CPF!).subscribe({
      next: (data) => {
        if (data !== null) {
          this.cliente = data;
        }
      },
    });
  }

  depositar(): void {
    if (this.formDeposito.form.valid) {
      this.deposito.operacao = 'DEPOSITO';
      this.deposito.idContaOrigem = this.cliente.conta?.id;

      this.clienteService.inserirMovimentacao(this.deposito).subscribe({
        next: (data) => {
          if (data !== null) {
            this.router.navigate(['/']);
          }
        },
      });
    }
  }
}
