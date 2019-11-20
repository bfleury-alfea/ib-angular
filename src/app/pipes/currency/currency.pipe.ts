import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const currency = (args[0] || '€');
    return value + ' ' + currency;
  }
}
