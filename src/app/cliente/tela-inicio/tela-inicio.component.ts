import { Component } from '@angular/core';

@Component({
  selector: 'app-tela-inicio',
  templateUrl: './tela-inicio.component.html',
  styleUrls: ['./tela-inicio.component.css']
})
export class TelaInicioComponent {

  currentBalance!: number;
  currentCreditLimit!: number;
  managerName!: string;

  constructor() {
    this.currentBalance = -23589.01;
    this.currentCreditLimit = 128.02;
    this.managerName = 'João Silva';
  }
}
