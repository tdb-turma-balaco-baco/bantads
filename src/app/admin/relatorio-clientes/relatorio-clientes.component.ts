import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Cliente } from 'src/app/shared';


@Component({
  selector: 'app-relatorio-clientes',
  templateUrl: './relatorio-clientes.component.html',
  styleUrls: ['./relatorio-clientes.component.css']
})
export class RelatorioClientes implements OnInit   {
  clientes: Cliente[] = [];
  constructor(private adminService: AdminService) { }
  ngOnInit(): void {
    this.clientes = this.listarTodos();
    this.clientes.sort((a, b) => a.nome!.localeCompare(b.nome!));
  }

  listarTodos(): Cliente[] {
    return this.adminService.listarTodosClientes();
  }

}
