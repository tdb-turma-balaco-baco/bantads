import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Movimentacao } from 'src/app/shared';

@Component({
  selector: 'app-sacar',
  templateUrl: './sacar.component.html',
  styleUrls: ['./sacar.component.css']
})
export class SacarComponent implements OnInit {

  @ViewChild('formSacar') formSacar! : NgForm;
  saque: Movimentacao = new Movimentacao();


  ngOnInit(): void {

  }

  sacar(): void{
    if(this.formSacar.form.valid){
      this.saque.operacao = "SAQUE";
      alert("Valor recebido:" + this.saque.valor + " do tipo: " + this.saque.operacao);
    }
  }
}
