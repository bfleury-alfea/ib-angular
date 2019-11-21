import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {IngredientService} from '../../services/ingredient/ingredient.service';
import {ingredientExists} from '../../validators/ingredient-exists';

@Component({
  selector: 'app-ingredient-form-page',
  templateUrl: './ingredient-form-page.component.html',
  styleUrls: ['./ingredient-form-page.component.scss']
})
export class IngredientFormPageComponent implements OnInit {
  ingredientForm: FormGroup;

  constructor(
    private ingredientService: IngredientService,
    private router: Router,
    fb: FormBuilder
  ) {
    this.ingredientForm = fb.group({
      name: fb.control('', [Validators.required, Validators.minLength(5)], [ingredientExists(ingredientService)]),
      price: fb.control(0, [Validators.required]),
      weight: fb.control(0, [Validators.required]),
      image: fb.control('', [])
    });
  }

  ngOnInit() {
  }

  save() {
    this.ingredientService.createIngredient(this.ingredientForm.value).subscribe((ingredient) => {
      this.router.navigate(['/ingredients']);
    });
  }
}
