import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Observable} from 'rxjs';
import {PIZZAS} from '../mocks/pizzas.mock';
import {INGREDIENTS} from '../mocks/ingredients.mock';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService implements InMemoryDbService {

  constructor() {
  }

  createDb(): {} | Observable<{}> | Promise<{}>  {
    return {
      pizzas: PIZZAS,
      ingredients: INGREDIENTS
    };
  }
}
