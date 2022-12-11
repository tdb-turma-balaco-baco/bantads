import { Directive, Input, OnInit } from '@angular/core';
import {
  FormControl,
  NG_VALIDATORS,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[minimo]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MinValidatorDirective,
      multi: true,
    },
  ],
})
export class MinValidatorDirective implements Validator, OnInit {
  @Input('valorMinimo') valorMinimo: string = '0';

  constructor() {}

  ngOnInit(): void {}

  validate(control: FormControl) {
    let valor: number = +control.value;
    if (isNaN(valor) || valor < +this.valorMinimo) {
      return { minimo: true, requiredValue: +this.valorMinimo };
    }
    return null;
  }
}
