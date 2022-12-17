import { Component } from '@angular/core';
import { Cliente } from 'src/app/shared';

@Component({
  selector: 'app-top-clientes',
  templateUrl: './top-clientes.component.html',
  styleUrls: ['./top-clientes.component.css'],
})
export class TopClientesComponent {
  topClientes!: Cliente[];

  constructor() {}

  ngOnInit(): void {
    this.topClientes = this.listarTopClientes();
  }

  listarTopClientes() {
    // return this.gerenteService.listarTopClientes();
    const remove: Cliente[] = [
      {
        nome: 'Pedro da Silva',
        CPF: '99999999929',
        conta: { saldo: 55000.03 },
        endereco: { cidade: { municipio: 'Curitiba', estado: { UF: 'PR' } } },
      },
      {
        nome: 'Joãozinho dos Santos',
        CPF: '99399999929',
        conta: { saldo: 30000.00 },
        endereco: { cidade: { municipio: 'Florianópolis', estado: { UF: 'SC' } } },
      },
      {
        nome: 'Gabriel dos Santos',
        CPF: '99994999929',
        conta: { saldo: 12000.00 },
        endereco: { cidade: { municipio: 'Porto Alegre', estado: { UF: 'RS' } } },
      },
      {
        nome: 'Maria do Rosário',
        CPF: '99959999292',
        conta: { saldo: 1000.00 },
        endereco: { cidade: { municipio: 'Curitiba', estado: { UF: 'PR' } } },
      },
      {
        nome: 'Letícia Galvão',
        CPF: '19999999929',
        conta: { saldo: 159 },
        endereco: { cidade: { municipio: 'Curitiba', estado: { UF: 'PR' } } },
      },
    ];

    return remove;
  }
}
