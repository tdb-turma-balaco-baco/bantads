import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/auth/services';
import { Cliente, Movimentacao, Usuario } from 'src/app/shared';
import { ClienteService } from '../services';

@Component({
  selector: 'app-sacar',
  templateUrl: './sacar.component.html',
})
export class SacarComponent implements OnInit {
  @ViewChild('formSacar') formSacar!: NgForm;
  saque: Movimentacao = new Movimentacao();
  usuario: Usuario = new Usuario();
  cliente: Cliente = new Cliente();

  constructor(
    private autenticacaoService: AutenticacaoService,
    private clienteService: ClienteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.usuario = this.autenticacaoService.usuarioAutenticado;
    this.clienteService.buscarClientePorCPF(this.usuario.CPF!).subscribe({
      next: (data) => {
        this.cliente = data;
      },
    });
  }

  sacar(): void {
    if (this.formSacar.form.valid) {
      this.saque.operacao = 'SAQUE';
      this.saque.idContaOrigem = this.cliente.conta?.id;

      this.clienteService.inserirMovimentacao(this.saque).subscribe({
        next: (data) => {
          if (data !== null) {
            this.router.navigate(['/']);
          }
        },
      });
    }
  }
}
