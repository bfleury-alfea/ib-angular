import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Pizza} from '../../models/pizza.model';
import {PizzaService} from '../pizza/pizza.service';

@Injectable({
  providedIn: 'root'
})
export class PizzaResolverService implements Resolve<Pizza[]> {

  constructor(
    private pizzaService: PizzaService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Pizza[]> | Promise<Pizza[]> | Pizza[] {
    return this.pizzaService.getPizzas();
  }
}
