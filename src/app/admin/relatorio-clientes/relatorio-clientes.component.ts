import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Cliente, Usuario } from 'src/app/shared';
import { AutenticacaoService } from 'src/app/auth/services/autenticacao.service';


@Component({
  selector: 'app-relatorio-clientes',
  templateUrl: './relatorio-clientes.component.html',
})
export class RelatorioClientes implements OnInit   {
  clientes: Cliente[] = [];
  perfilAtual!: Usuario;

  constructor(private adminService: AdminService, private authService: AutenticacaoService) { }

  ngOnInit(): void {
    this.perfilAtual = this.authService.usuarioAutenticado;

    this.clientes = this.listarTodos();
    this.clientes.sort((clienteA, clienteB) => clienteA.nome!.localeCompare(clienteB.nome!));
  }

   listarTodos(): Cliente[] {
    this.adminService.listarTodosClientes().subscribe({
      next: (data: Cliente[]) => {
        if (data === null) {
          this.clientes = [];
        } else {
          this.clientes = data.sort((clienteA, clienteB) =>
            clienteA
              .nome!.toLowerCase()
              .localeCompare(clienteB.nome!.toLowerCase())
          );
        }
      },
    });
    return this.clientes;
  }

}
