import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../models/user.model';
import {Pizza} from '../../models/pizza.model';
import {Ingredient} from '../../models/ingredient.model';
import {PizzaService} from '../../services/pizza/pizza.service';
import {IngredientService} from '../../services/ingredient/ingredient.service';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas-page.component.html',
  styleUrls: ['./pizzas-page.component.scss']
})
export class PizzasPageComponent implements OnInit {
  pizzas: Pizza[];
  selectedPizza: Pizza;

  user: User;

  ingredients: Ingredient[];
  selectedIngredient: Ingredient;

  sort: any;

  constructor(
    private pizzaService: PizzaService,
    private ingredientService: IngredientService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    // this.pizzaService.getPizzas().then((pizzas) => this.pizzas = pizzas);

    this.route.data.subscribe((data) => {
      this.pizzas = data.pizzas;
    });


    this.user = new User(1, 'alvnububtftgvpUHTDexOvP', 'John', 'Doe', 'john.doe@gmail.com', 'notAPassword', '1992-12-19', 'unknown.svg');
    this.ingredientService.getIngredients().subscribe((ingredients) => this.ingredients = ingredients);
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
    if (pizza === null) {
      this.pizzaService.getPizzas().then((pizzas) => this.pizzas = pizzas);
    }

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
