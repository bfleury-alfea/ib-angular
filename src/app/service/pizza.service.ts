import {Injectable} from '@angular/core';
import {Pizza} from '../models/pizza.model';
import {PIZZAS} from '../mocks/pizzas.mock';
import {INGREDIENTS} from '../mocks/ingredients.mock';
import {Ingredient} from '../models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() {
  }

  getPizzas(): Promise<Pizza[]> {
    return Promise.resolve(PIZZAS);
  }

  getIngredients(): Promise<Ingredient[]> {
    return Promise.resolve(INGREDIENTS);
  }
}
