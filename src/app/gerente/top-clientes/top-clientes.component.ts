import { Component } from '@angular/core';
import { Cliente } from 'src/app/shared';
import { GerenteService } from '../services/gerente.service';

@Component({
  selector: 'app-top-clientes',
  templateUrl: './top-clientes.component.html',
  styleUrls: ['./top-clientes.component.css'],
})
export class TopClientesComponent {
  topClientes: Cliente[] = [];

  constructor(private gerenteService: GerenteService) {}

  ngOnInit(): void {
    this.listarTopClientes();
  }

  listarTopClientes() {
    this.gerenteService.listarTopClientesPorSaldo().subscribe({
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
