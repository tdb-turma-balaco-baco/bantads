import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacaoService } from 'src/app/auth/services/autenticacao.service';
import { Cliente, Usuario, Endereco } from 'src/app/shared';
import { ClienteService } from '../services';

@Component({
  selector: 'app-alterar-perfil',
  templateUrl: './alterar-perfil.component.html',
})
export class AlterarPerfilComponent {
  @ViewChild('formAlterarPerfil') formAlterarPerfil!: NgForm;

  usuario!: Usuario;
  public cliente!: Cliente;
  loading!: boolean;

  constructor(
    private clienteService: ClienteService,
    private authService: AutenticacaoService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.usuario = this.authService.usuarioAutenticado;

    // inicialização padrão dos objetos, pra evitar erros
    // em runtime o service já preenche os objetos com
    // os valores corretos
    this.cliente = new Cliente();
    this.cliente.endereco = new Endereco();

    this.clienteService.buscarClientePorCPF(+this.usuario.CPF?).subscribe({
      next: (cliente: Cliente) => {
        this.cliente = cliente;
      },
    });

    this.loading = false;
  }

  atualizar() {
    this.loading = true;

    if (this.formAlterarPerfil.form.valid) {
      this.clienteService.atualizar(this.cliente).subscribe({
        complete: () => {
          this.loading = false;
          this.router.navigate(['/login']);
        },
      });
    }

    this.loading = false;
  }
}
