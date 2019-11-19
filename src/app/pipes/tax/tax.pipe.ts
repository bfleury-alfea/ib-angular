import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'tax'
})
export class TaxPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const tax = (args[0] || 20);
    return value * (1 + tax / 100);
  }
}
