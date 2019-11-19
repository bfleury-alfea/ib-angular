import {Component, OnInit} from '@angular/core';
import {Pizza} from './models/pizza.model';
import {User} from './models/user.model';
import {Ingredient} from './models/ingredient.model';
import {PizzaService} from './service/pizza/pizza.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string;

  pizzas: Pizza[];
  selectedPizza: Pizza;

  user: User;

  ingredients: Array<Ingredient>;
  selectedIngredient: Ingredient;

  constructor(
    private pizzaService: PizzaService
  ) {
  }

  ngOnInit(): void {
    this.title = 'Pizza Party Jelly Time';
    this.pizzaService.getPizzas().then((pizzas) => this.pizzas = pizzas);
    this.user = new User(1, 'John', 'Doe', '1992-12-19', 'john-doe');
    this.pizzaService.getIngredients().then((ingredients) => this.ingredients = ingredients);
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
