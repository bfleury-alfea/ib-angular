import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../../models/ingredient.model';
import {IngredientService} from '../../services/ingredient/ingredient.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-ingredients-page',
  templateUrl: './ingredients-page.component.html',
  styleUrls: ['./ingredients-page.component.scss']
})
export class IngredientsPageComponent implements OnInit {
  ingredients: Ingredient[];
  selectedIngredient: Ingredient;

  sort: any;

  constructor(
    private ingredientService: IngredientService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.ingredientService.getIngredients().subscribe((ingredients) => this.ingredients = ingredients);
    this.sort = {
      field: 'name',
      order: 'asc'
    };
  }

  ingredientSelected(ingredient) {
    this.selectedIngredient = ingredient;
    console.log(ingredient);
  }

  ingredientDeselected(ingredient) {
    if (ingredient === null) {
      this.ingredientService.getIngredients().subscribe((ingredients) => this.ingredients = ingredients);
    }
    this.selectedIngredient = null;
  }
}
