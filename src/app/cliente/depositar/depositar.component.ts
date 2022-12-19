import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Movimentacao } from 'src/app/shared';

@Component({
  selector: 'app-depositar',
  templateUrl: './depositar.component.html',
  styleUrls: ['./depositar.component.css']
})
export class DepositarComponent implements OnInit {

  @ViewChild('formDeposito') formDeposito!: NgForm;
  deposito: Movimentacao = new Movimentacao();

  ngOnInit(): void {

  }

  depositar(): void {
    if (this.formDeposito.form.valid) {
      this.deposito.operacao = "DEPOSITO";
      alert("Valor recebido:" + this.deposito.valor + " do tipo: " + this.deposito.operacao);
    }
  }
}
