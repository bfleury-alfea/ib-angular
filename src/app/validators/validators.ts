import {AbstractControl, AsyncValidatorFn, ValidatorFn} from '@angular/forms';
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
      return (exists ? {exists: true} : null);
    }));
  });
}

export function userMailValid(): ValidatorFn {
  return ((control: AbstractControl) => {
    const mail = control.value;
    const regExp = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/;

    const mailValid = mail.match(regExp);

    return (mailValid ? {mailValid: true} : null);
  });
}

export function userPasswordsMatch(): ValidatorFn {
  return ((control: AbstractControl) => {
    return (control.value.password === control.value.confirm_password ? null : {noMatch: true});
  });
}
