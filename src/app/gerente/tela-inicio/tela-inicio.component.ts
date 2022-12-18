import { Component } from '@angular/core';
import { ClienteService } from 'src/app/cliente/services/cliente.service';
import { Cliente } from 'src/app/shared/models/cliente/cliente.model';
import { GerenteService } from '../services/gerente.service';

@Component({
  selector: 'app-tela-inicio',
  templateUrl: './tela-inicio.component.html',
  styleUrls: ['./tela-inicio.component.css'],
})
export class TelaInicioComponent {
  clientes: Cliente[] = [];

  constructor(
    private clienteService: ClienteService,
    private gerenteService: GerenteService
  ) {}

  ngOnInit(): void {
    this.listarClientesPendentesAprovacao();
  }

  listarClientesPendentesAprovacao() {
    return this.gerenteService.listarClientesPendentesAprovacao().subscribe({
      next: (data: Cliente[]) => {
        if (data === null) {
          this.clientes = [];
        } else {
          this.clientes = data;
        }
      },
    });
  }

  aprovarAberturaConta($event: MouseEvent, cliente: Cliente) {
    $event.preventDefault();
    if (confirm(`Deseja realmente APROVAR a abertura de conta do cliente ${cliente.nome}?`)) {
      this.gerenteService.aprovarAberturaConta(cliente).subscribe({
        complete: () => {
          this.listarClientesPendentesAprovacao();
        }
      });
    }
  }

  recusarAberturaConta($event: MouseEvent, cliente: Cliente) {
    $event.preventDefault();
    if (confirm(`Deseja realmente RECUSAR a abertura de conta do cliente ${cliente.nome}?`)) {
      this.gerenteService.recusarAberturaConta(cliente).subscribe({
        complete: () => {
          this.listarClientesPendentesAprovacao();
        }
      });
    }
  }
}
