import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {Pizza} from '../../models/pizza.model';
import {PizzaService} from '../../services/pizza/pizza.service';

@Component({
  selector: 'app-page-pizza',
  templateUrl: './pizza-page.component.html',
  styleUrls: ['./pizza-page.component.scss']
})
export class PizzaPageComponent implements OnInit {
  pizza: Pizza;
  isFirst: boolean;
  isLast: boolean;

  constructor(
    private pizzaService: PizzaService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    // Via une Promesse //
    this.pizzaService
      .getPizza(+this.route.snapshot.paramMap.get('id'))
      .then((pizza) => this.pizza = pizza);

    // Via un observable //
    this.route.params
      .pipe(
        switchMap((params: Params) => this.pizzaService.getPizza(+params.id))
      )
      .subscribe(
        pizza => {
          this.pizza = pizza;
          this.pizzaService.getMinPizzaId().then((min) => this.isFirst = (min === this.pizza.id));
          this.pizzaService.getMaxPizzaId().then((max) => this.isLast = (max === this.pizza.id));
        }
      );

    this.isFirst = true;
    this.isLast = true;
  }
}
