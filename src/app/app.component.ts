import {Component, OnInit} from '@angular/core';
import {Pizza} from './models/pizza.model';
import {User} from './models/user.model';
import {Ingredient} from './models/ingredient.model';

const PIZZAS: Pizza[] = [
  {id: 1, name: 'Reine', price: 12},
  {id: 2, name: '4 fromages', price: 13},
  {id: 3, name: 'Orientale', price: 11},
  {id: 4, name: 'Cannibale', price: 9}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string;
  selectedPizza: Pizza;
  pizzas: Pizza[];
  user: User;
  ingredients: Array<Ingredient>;

  constructor() {
  }

  ngOnInit(): void {
    this.title = 'Pizza Party Jelly Time';
    this.pizzas = PIZZAS;
    this.user = new User(1, 'John', 'Doe', '1992-12-19', 'john-doe');

    const ing1 = new Ingredient(1, 'Sauce Tomate', '100', '3', 'sauce-tomate');
    const ing2 = new Ingredient(2, 'Mozzarella', '50', '2', 'mozzarella');
    const ing3 = new Ingredient(3, 'Chèvre', '50', '6', 'chevre');
    const ing4 = new Ingredient(4, 'Bleue', '25', '10', 'bleue');

    this.ingredients = [ing1, ing2, ing3, ing4];

    console.log('AppComponent');
    console.log(this.ingredients);
  }

  onSelect(pizza: Pizza) {
    this.selectedPizza = pizza;
  }
}
