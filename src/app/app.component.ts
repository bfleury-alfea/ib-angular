import {Component, OnInit} from '@angular/core';
import {Pizza} from './models/pizza.model';
import {User} from './models/user.model';
import {Ingredient} from './models/ingredient.model';

const pizza1 = new Pizza(1, 'Reine', 12, 'pizza1.png');
const pizza2 = new Pizza(2, '4 fromages', 13, 'pizza2.png');
const pizza3 = new Pizza(3, 'Orientale', 11, 'pizza3.png');
const pizza4 = new Pizza(4, 'Cannibale', 9, 'pizza4.png');

const ing1 = new Ingredient(1, 'Sauce Tomate', '100', '3', 'sauce-tomate');
const ing2 = new Ingredient(2, 'Mozzarella', '50', '2', 'mozzarella');
const ing3 = new Ingredient(3, 'Chèvre', '50', '6', 'chevre');
const ing4 = new Ingredient(4, 'Bleue', '25', '10', 'bleue');

const PIZZAS: Pizza[] = [pizza1, pizza2, pizza3, pizza4];
const INGREDIENTS = [ing1, ing2, ing3, ing4];

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

  constructor() {
  }

  ngOnInit(): void {
    this.title = 'Pizza Party Jelly Time';
    this.pizzas = PIZZAS;
    this.user = new User(1, 'John', 'Doe', '1992-12-19', 'john-doe');
    this.ingredients = INGREDIENTS;

    console.log('AppComponent');
    console.log(this.ingredients);
  }

  pizzaSelected(pizza) {
    this.selectedPizza = pizza;
  }

  pizzaDeselected(pizza) {
    this.selectedPizza = null;
  }

  ingredientSelected(ingredient) {
    this.selectedIngredient = ingredient;
  }
}
