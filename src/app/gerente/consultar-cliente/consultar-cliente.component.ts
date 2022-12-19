import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/cliente';
import { Cliente } from 'src/app/shared';

@Component({
  selector: 'app-consultar-cliente',
  templateUrl: './consultar-cliente.component.html',
  styleUrls: ['./consultar-cliente.component.css'],
})
export class ConsultarClienteComponent {
  cliente: Cliente = new Cliente();
  loading: boolean = false;
  exibirDados: boolean = false;
  resultadoInvalido: boolean = false;
  campoConsultarCPF: string = '';

  mensagemErro!: string;

  constructor(
    private clienteService: ClienteService,
    public route: ActivatedRoute,
    public router: Router
  ) {}

  consultarCliente(): void {
    this.cliente = new Cliente();
    this.exibirDados = false;
    this.resultadoInvalido = false;
    this.loading = true;

    const CPFnormalizado = this.campoConsultarCPF.trim().replace(/[^0-9]/g, '');

    if (CPFnormalizado.length === 11) {
      this.clienteService.buscarClientePorCPF(CPFnormalizado).subscribe({
        next: (clientes: Cliente[]) => {
          if (clientes.length > 0) {
            this.cliente = clientes[0];
            this.exibirDados = true;
          } else {
            this.resultadoInvalido = true;
            this.mensagemErro =
              'Ocorreu um problema ao buscar pelo CPF informado, verifique se é válido e tente novamente.';
            this.exibirDados = false;
          }
        },
      });
    } else {
      this.resultadoInvalido = true;
      this.mensagemErro =
        'CPF inválido, por favor verifique e tente novamente.';
    }

    this.loading = false;
  }
}
