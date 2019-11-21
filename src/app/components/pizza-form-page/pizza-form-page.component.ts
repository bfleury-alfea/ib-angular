import {Component, OnInit} from '@angular/core';
import {Pizza} from '../../models/pizza.model';
import {Ingredient} from '../../models/ingredient.model';
import {PizzaService} from '../../services/pizza/pizza.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IngredientService} from '../../services/ingredient/ingredient.service';

@Component({
  selector: 'app-pizza-form-page',
  templateUrl: './pizza-form-page.component.html',
  styleUrls: ['./pizza-form-page.component.scss']
})
export class PizzaFormPageComponent implements OnInit {

  pizza: Pizza;
  ingredients: Ingredient[];

  constructor(
    private pizzaService: PizzaService,
    private ingredientService: IngredientService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.pizza = {
      id: 0,
      name: '',
      price: 0,
      ingredients: []
    };
    this.ingredientService.getIngredients().subscribe((ingredients) => this.ingredients = ingredients);
  }

  save() {
    this.pizzaService.createPizza(this.pizza).then((pizza) => {
      this.router.navigate(['/pizzas']);
    });
  }

  ingredientSelected(ingredient) {
    if (this.pizza) {
      this.pizza.ingredients.push(ingredient);
    }
  }
}
