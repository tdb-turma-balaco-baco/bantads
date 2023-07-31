import {Component, OnInit} from '@angular/core';
import {Cliente, Usuario} from 'src/app/shared';


@Component({
  selector: 'app-relatorio-clientes',
  templateUrl: './relatorio-clientes.component.html',
})
export class RelatorioClientes implements OnInit {
  clientes: Cliente[] = [];
  perfilAtual!: Usuario;

  constructor() {
  }

  ngOnInit(): void {

    this.clientes = this.listarTodos();
    this.clientes.sort((clienteA, clienteB) => clienteA.nome!.localeCompare(clienteB.nome!));
  }

  listarTodos(): Cliente[] {
    return this.clientes;
  }

}
