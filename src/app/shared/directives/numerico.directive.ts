import { Directive, ElementRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[numerico]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: NumericoDirective,
      multi: true,
    },
  ],
})
export class NumericoDirective implements ControlValueAccessor {
  constructor(private el: ElementRef) {}

  @HostListener('keyup', ['$event'])
  onKeyUp($event: any) {
    let valor = $event.target.value;
    // RegEx para permitir apenas números
    valor = valor.replace(/[\D]/g, '');
    $event.target.value = valor;

    // Atualiza o model
    this.registerOnChange(valor);
  }

  writeValue(obj: any): void {
    this.el.nativeElement.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onChange: any;
  onTouched: any;
}
