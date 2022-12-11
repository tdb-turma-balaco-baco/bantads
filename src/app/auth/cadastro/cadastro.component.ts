import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  endereco!: Endereco;
  estados: Estado[] = [];
  cidades!: Cidade[];

  constructor(
    private cidadeService: CidadeService,
    private estadoService: EstadoService
  ) {}

  ngOnInit(): void {
    this.cliente = new Cliente();
    this.endereco = new Endereco();

    this.listarCidades();
    this.listarEstados();
  }

  cadastrar() {
    // TODO: Implementar
    console.log('Cadastrar');
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
