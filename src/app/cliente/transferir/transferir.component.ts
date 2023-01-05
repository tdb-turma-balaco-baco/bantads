import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Movimentacao} from 'src/app/shared';

@Component({
  selector: 'app-transferir',
  templateUrl: './transferir.component.html',
})
export class TransferirComponent {
  @ViewChild('formTransferir') formTransferir!: NgForm;
  transferencia: Movimentacao = new Movimentacao();

  ngOnInit(): void {

  }

  transferir(): void {
    if (this.formTransferir.form.valid) {
      this.transferencia.operacao = "TRANSFERENCIA";
      alert("Valor recebido:" + this.transferencia.valor + " do tipo: " + this.transferencia.operacao + "para a conta: " + this.transferencia.idContaDestino);
    }
  }
}
