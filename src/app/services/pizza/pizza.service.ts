import {Injectable} from '@angular/core';
import {PIZZAS} from '../../mocks/pizzas.mock';
import {INGREDIENTS} from '../../mocks/ingredients.mock';
import {Pizza} from '../../models/pizza.model';
import {Ingredient} from '../../models/ingredient.model';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() {
  }

  getPizzas2(): Promise<Pizza[]> {
    return Promise.resolve(PIZZAS);
  }

  getPizzas(): Promise<Pizza[]> {
    return new Promise<Pizza[]>((resolve, reject) => {
      setTimeout(() => resolve(Promise.resolve(PIZZAS)), 1000);
    });
  }

  getPizza(id: number): Promise<Pizza> {
    return this.getPizzas().then(
      pizzas => pizzas.find((p) => p.id === id)
    );
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
    return Promise.resolve(INGREDIENTS);
  }
}
