import {Pipe, PipeTransform} from '@angular/core';

import * as _ from 'lodash';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const field = args[0] || 'name';
    const sort = args[1] || 'asc';

    return _.orderBy(value, [field], [sort]);
  }
}
