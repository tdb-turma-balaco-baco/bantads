import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/cliente/services/cliente.service';
import {
  Cidade,
  CidadeService,
  Cliente,
  Endereco,
  Estado,
  EstadoService,
} from 'src/app/shared';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent {
  @ViewChild('formCadastro') formCadastro!: NgForm;
  cliente!: Cliente;
  loading!: boolean;
  enderecoCliente!: Endereco;
  cidadeCliente!: Cidade;
  estadoCliente!: Estado;
  estados!: Estado[];
  cidades!: Cidade[];

  constructor(
    private cidadeService: CidadeService,
    private estadoService: EstadoService,
    private clienteService: ClienteService,
    public router: Router
  ) {}

  ngOnInit(): void {
    // Bind dos objetos TypeScript, para trabalhar o formulário
    this.cliente = new Cliente();
    this.enderecoCliente = new Endereco();
    this.cliente.endereco = this.enderecoCliente;
    this.cidadeCliente = new Cidade();
    this.cliente.endereco.cidade = this.cidadeCliente;
    this.estadoCliente = new Estado();
    this.cliente.endereco.cidade.estado = this.estadoCliente;

    // Define que o radio input padrão é rua, e pode ser alterado em runtime
    this.enderecoCliente.tipoEndereco = 'Rua';

    this.listarCidades();
    this.listarEstados();

    this.loading = false;
  }

  cadastrar() {
    this.loading = true;

    if (this.formCadastro.form.valid) {
      this.clienteService.inserir(this.cliente).subscribe({
        complete: () => {
          this.loading = false;
          this.router.navigate(['/login']);
        }
      });
    } else {
      console.log(this.formCadastro.form)
    }

    this.loading = false;
  }

  listarEstados() {
    return this.estadoService.listarTodosEstados().subscribe({
      next: (data: Estado[]) => {
        if (data === null) {
          this.estados = [];
        } else {
          this.estados = data;
        }
      },
    });
  }

  listarCidades() {
    return this.cidadeService.listarTodasCidades().subscribe({
      next: (data: Cidade[]) => {
        if (data === null) {
          this.cidades = [];
        } else {
          this.cidades = data;
        }
      },
    });
  }
}
