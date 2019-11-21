import {Component, OnInit} from '@angular/core';
import {switchMap} from 'rxjs/operators';
import {ActivatedRoute, Params} from '@angular/router';
import {IngredientService} from '../../services/ingredient/ingredient.service';
import {Ingredient} from '../../models/ingredient.model';

@Component({
  selector: 'app-ingredient-page',
  templateUrl: './ingredient-page.component.html',
  styleUrls: ['./ingredient-page.component.scss']
})
export class IngredientPageComponent implements OnInit {
  ingredient: Ingredient;
  isFirst: boolean;
  isLast: boolean;

  constructor(
    private ingredientService: IngredientService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    // Via un observable //
    this.route.params
      .pipe(
        switchMap((params: Params) => this.ingredientService.getIngredient(+params.id))
      )
      .subscribe(
        ingredient => {
          this.ingredient = ingredient;
          this.ingredientService.getMinIngredientId().subscribe((min) => this.isFirst = (min === this.ingredient.id));
          this.ingredientService.getMaxIngredientId().subscribe((max) => this.isLast = (max === this.ingredient.id));
        }
      );

    this.isFirst = true;
    this.isLast = true;
  }
}
