import { Component } from '@angular/core';
import { AutenticacaoService } from 'src/app/auth/services';
import { Cliente, Usuario } from 'src/app/shared';
import { GerenteService } from '../services/gerente.service';

@Component({
  selector: 'app-top-clientes',
  templateUrl: './top-clientes.component.html',
})
export class TopClientesComponent {
  topClientes: Cliente[] = [];
  usuario: Usuario = new Usuario();

  constructor(private gerenteService: GerenteService, private autenticacaoService: AutenticacaoService) {}

  ngOnInit(): void {
    this.listarTopClientes();
    this.usuario = this.autenticacaoService.usuarioAutenticado;
  }

  listarTopClientes() {
    this.gerenteService.listarTopClientesPorSaldo(this.usuario.CPF!).subscribe({
      next: (data: Cliente[]) => {
        if (data === null) {
          this.topClientes = [];
        } else {
          this.topClientes = data;
        }
      },
    });
  }
}
