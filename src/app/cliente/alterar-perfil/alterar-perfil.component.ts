import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/auth/services/autenticacao.service';
import { Cliente, Usuario } from 'src/app/shared';
import { ClienteService } from '../services';

@Component({
  selector: 'app-alterar-perfil',
  templateUrl: './alterar-perfil.component.html',
})
export class AlterarPerfilComponent {
  @ViewChild('formAlterarPerfil') formAlterarPerfil!: NgForm;

  public cliente!: Cliente;
  usuario!: Usuario;
  loading!: boolean;

  constructor(
    private clienteService: ClienteService,
    private authService: AutenticacaoService,
    public router: Router
  ) {
    this.usuario = this.authService.usuarioAutenticado;
  }

  ngOnInit(): void {
    if (this.usuario.CPF)
      this.clienteService
        .buscarClientePorCPF(this.usuario.CPF)
        .subscribe((cliente: Cliente) => {
          this.cliente = cliente;
        });

    this.loading = false;
  }

  atualizar() {
    this.loading = true;

    if (this.formAlterarPerfil.form.valid && this.cliente) {
      const clienteAtualizado = this.cliente;
      this.clienteService.atualizar(clienteAtualizado).subscribe({
        complete: () => {
          this.loading = false;
          this.router.navigate(['/login']);
        },
      });
    }

    this.loading = false;
  }
}
