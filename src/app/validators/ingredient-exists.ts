import {AbstractControl, AsyncValidatorFn} from '@angular/forms';
import {IngredientService} from '../services/ingredient/ingredient.service';
import {map} from 'rxjs/operators';

/**
 * Vérifie si l'ingédient n'existe pas déjà en base avec le même nom
 * Si c'est le cas, il faut retourner un objet. ex: {exists: true}
 * Sinon on retourne null
 * Exemple : .hasError('exists')
 *
 * return null | any
 */
export function ingredientExists(ingredientService: IngredientService): AsyncValidatorFn {
  return ((control: AbstractControl) => {
    return ingredientService.getIngredientExists(control.value).pipe(map((exists) => {
      console.log(control.value);
      console.log(exists);
      return (exists ? {exists: true} : null);
    }));
  });
}
