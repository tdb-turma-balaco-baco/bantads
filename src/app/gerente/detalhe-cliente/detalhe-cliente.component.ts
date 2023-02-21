import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/cliente';
import { Cliente } from 'src/app/shared';

@Component({
  selector: 'app-detalhe-cliente',
  templateUrl: './detalhe-cliente.component.html',
  styleUrls: ['./detalhe-cliente.component.css'],
})
export class DetalheClienteComponent {
  cliente: Cliente = new Cliente();

  constructor(
    private clienteService: ClienteService,
    public activeRoute: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit() {
    const cpf = +this.activeRoute.snapshot.params['cpf'];

    this.clienteService.buscarClientePorCPF('cpf').subscribe({
      next: (cliente) => {
        if (cliente !== null) {
          this.cliente = cliente;
        }
      },
    });
  }
}
