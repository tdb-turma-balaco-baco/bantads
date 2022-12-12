import { Component } from '@angular/core';
import { Cliente } from 'src/app/shared/models/cliente/cliente.model';
import { GerenteService } from '../service/gerente.service';

@Component({
  selector: 'app-tela-inicio',
  templateUrl: './tela-inicio.component.html',
  styleUrls: ['./tela-inicio.component.css'],
})
export class TelaInicioComponent {
  clientes: Cliente[] = [];

  constructor(private gerenteService: GerenteService) {}

  ngOnInit(): void {
    this.clientes = this.listarClientes();
  }

  listarClientes(): Cliente[] {
    return this.gerenteService.listarClientesPendentes();
  }
}
