import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone',
})
export class TelefonePipe implements PipeTransform {
  transform(telefone: string | undefined): string {
    if (!telefone || telefone.trim() === '') {
      return '';
    }

    const stringBuilder =
      `(${telefone.substring(0, 2)}) ${telefone.substring(2,7)}-${telefone.substring(7, 11)}`;
    return stringBuilder;
  }
}
