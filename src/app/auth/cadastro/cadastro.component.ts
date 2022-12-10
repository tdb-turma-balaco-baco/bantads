import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cidade, Cliente, Endereco, Estado } from 'src/app/shared';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent {
  @ViewChild('formCadastro') formCadastro!: NgForm;
  cliente!: Cliente;
  endereco!: Endereco;
  estados: Estado[] = [
    { UF: 'SC', nome: 'Santa Catarina' },
    { UF: 'PR', nome: 'Paraná' },
    { UF: 'RS', nome: 'Rio Grande do Sul' },
  ];
  cidades: Cidade[] = [
    { municipio: 'Curitiba' },
    { municipio: 'Florianópolis' },
    { municipio: 'Porto Alegre' },
  ];

  constructor() {}

  ngOnInit(): void {
    this.cliente = new Cliente();
    this.endereco = new Endereco();
  }

  cadastrar() {
    // TODO: Implementar
    console.log('Cadastrar');
  }
}
