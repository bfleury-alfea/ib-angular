import {Component, OnInit} from '@angular/core';
import {User} from '../../../models/user.model';
import {Pizza} from '../../../models/pizza.model';
import {Ingredient} from '../../../models/ingredient.model';
import {PizzaService} from '../../../service/pizza/pizza.service';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.scss']
})
export class PizzasComponent implements OnInit {
  pizzas: Pizza[];
  selectedPizza: Pizza;

  user: User;

  ingredients: Array<Ingredient>;
  selectedIngredient: Ingredient;

  sort: any;

  constructor(
    private pizzaService: PizzaService
  ) {
  }

  ngOnInit(): void {
    this.pizzaService.getPizzas().then((pizzas) => this.pizzas = pizzas);
    this.user = new User(1, 'John', 'Doe', '1992-12-19', 'unknown.svg');
    this.pizzaService.getIngredients().then((ingredients) => this.ingredients = ingredients);
    this.sort = {
      field: 'name',
      order: 'asc'
    };
  }

  pizzaSelected(pizza) {
    if (this.selectedPizza) {
      this.selectedPizza.ingredients = [];
    }
    this.selectedPizza = pizza;
  }

  pizzaDeselected(pizza) {
    if (this.selectedPizza) {
      this.selectedPizza.ingredients = [];
    }
    this.selectedPizza = null;
  }

  ingredientSelected(ingredient) {
    this.selectedIngredient = ingredient;
    if (this.selectedPizza) {
      this.selectedPizza.ingredients.push(this.selectedIngredient);
    }
  }

}
