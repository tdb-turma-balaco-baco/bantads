import { Component } from '@angular/core';
import { AutenticacaoService } from 'src/app/auth/services/autenticacao.service';
import { Cliente, Usuario } from 'src/app/shared';
import { GerenteService } from '../services/gerente.service';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
})
export class ListarClientesComponent {
  clientes: Cliente[] = [];
  perfilAtual!: Usuario;
  termoBusca!: string;

  constructor(
    private gerenteService: GerenteService,
    private authService: AutenticacaoService
  ) {}

  ngOnInit() {
    this.perfilAtual = this.authService.usuarioAutenticado;

    this.listarClientesPorGerenteCpf(this.perfilAtual.CPF!);
    this.clientes.sort((clienteA, clienteB) =>
      clienteA.nome!.localeCompare(clienteB.nome!)
    );
  }

  listarClientesPorGerenteCpf(cpf: string) {
    this.gerenteService.listarClientesPorGerenteCpf(cpf).subscribe({
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
  }
}
