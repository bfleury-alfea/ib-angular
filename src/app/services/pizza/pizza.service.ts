import {Injectable} from '@angular/core';
import {Pizza} from '../../models/pizza.model';
import * as _ from 'lodash';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  private URL: string;

  constructor(
    private http: HttpClient
  ) {
    this.URL = environment.apiURL;
  }

  getPizzas(): Promise<Pizza[]> {
    return this.http.get(this.URL + 'pizzas').toPromise().then((response) => response as Pizza[]);
  }

  getPizza(id: number): Promise<Pizza> {
    return this.http.get(this.URL + 'pizzas/' + id).toPromise().then((response) => response as Pizza);
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

  createPizza(pizza: Pizza): Promise<Pizza> {
    return this.getMaxPizzaId().then((max) => {
      pizza.id = max + 1;
      pizza.image = '/assets/pizza/' + pizza.image;

      return this.http.post(this.URL + 'pizzas', pizza).toPromise().then((response) => response as Pizza);
    });
  }

  updatePizza(pizza: Pizza): Promise<Pizza> {
    return this.http.put(this.URL + 'pizzas/' + pizza.id, pizza).toPromise().then((response) => response as Pizza);
  }

  deletePizza(pizza: Pizza): Promise<Pizza> {
    return this.http.delete(this.URL + 'pizzas/' + pizza.id).toPromise().then((response) => response as Pizza);
  }
}
