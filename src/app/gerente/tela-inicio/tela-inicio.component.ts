import { Component } from '@angular/core';
import { ClienteService } from 'src/app/cliente';
import { Cliente } from 'src/app/shared/models/cliente/cliente.model';

@Component({
  selector: 'app-tela-inicio',
  templateUrl: './tela-inicio.component.html',
  styleUrls: ['./tela-inicio.component.css']
})
export class TelaInicioComponent {

  clientes: Cliente[] = [];
  constructor(private clienteService: ClienteService){

  }
  ngOnInit(): void{
    this.clientes = this.listarClientes();
  }
  listarClientes(): Cliente[] {
    return this.clienteService.listarTodos();
  }
}
