import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/cliente/services/cliente.service';
import { Cliente } from 'src/app/shared';


@Component({
  selector: 'app-tela-rlclientes',
  templateUrl: './tela-rlclientes.component.html',
  styleUrls: ['./tela-rlclientes.component.css']
})
export class TelaRlclientesComponent implements OnInit   {
  clientes: Cliente[] = [];
  constructor(private clienteService: ClienteService) { }
  ngOnInit(): void {
    this.clientes = this.listarTodos(), this.ordemCrescente();
  }

  listarTodos(): Cliente[] {
    return this.clienteService.listarTodos();
  }
  ordemCrescente(): void {
    this.clientes.sort((a, b) => a.nome!.localeCompare(b.nome!));

  }
}
