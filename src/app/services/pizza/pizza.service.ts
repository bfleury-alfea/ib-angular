import {Injectable} from '@angular/core';
import {PIZZAS} from '../../mocks/pizzas.mock';
import {INGREDIENTS} from '../../mocks/ingredients.mock';
import {Pizza} from '../../models/pizza.model';
import {Ingredient} from '../../models/ingredient.model';
import * as _ from 'lodash';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(
    private http: HttpClient
  ) {
  }

  getPizzas(): Promise<Pizza[]> {
    return this.http.get('/api/pizzas').toPromise().then((response) => response as Pizza[]);
  }

  getPizza(id: number): Promise<Pizza> {
    return this.http.get('/api/pizzas/' + id).toPromise().then((response) => response as Pizza);
  }

  getMinPizzaId(): Promise<number> {
    return this.getPizzas().then((pizzas) => {
      const test = _.chain(pizzas).map('id').min().value();
      return Promise.resolve(test);
    });
  }

  getMaxPizzaId(): Promise<number> {
    return this.getPizzas().then((pizzas) => {
      const test = _.chain(pizzas).map('id').max().value();
      return Promise.resolve(test);
    });
  }

  getIngredients(): Promise<Ingredient[]> {
    return this.http.get('/api/ingredients').toPromise().then((response) => response as Ingredient[]);
  }

  update(pizza: Pizza): Promise<Pizza> {
    return this.http.put('/api/pizzas/' + pizza.id, pizza).toPromise().then((pizza: Pizza) => {
      return pizza;
    });
  }
}
