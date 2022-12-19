import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CEP',
})
export class CepPipe implements PipeTransform {

  transform(CEP: string | undefined): string {
    let stringBuilder: string;

    if (!CEP || CEP.trim() === '') {
      return '';
    }

    stringBuilder = CEP.substring(0, 5) + '-';
    stringBuilder = stringBuilder + CEP.substring(5, 8);

    return stringBuilder;
  }
}
