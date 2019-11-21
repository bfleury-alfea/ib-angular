import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Ingredient} from '../../models/ingredient.model';
import * as _ from 'lodash';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  private URL: string;

  constructor(
    private http: HttpClient
  ) {
    this.URL = 'http://localhost:3000/';
  }

  getIngredients(): Observable<Ingredient[]> {
    return this.http.get(this.URL + 'ingredients').pipe(map((response) => response as Ingredient[]));
  }

  // getIngredient(id: number): Observable<Ingredient> {
  //   return this.http.get(this.URL + 'ingredients/' + id).pipe(map((response) => response as Ingredient[]));
  // }
  //
  // getMinIngredientId(): Promise<number> {
  //   return this.getIngredients().then((ingredients) => {
  //     const test = _.chain(ingredients).map('id').min().value();
  //     return Promise.resolve(test);
  //   });
  // }
  //
  // getMaxIngredientId(): Promise<number> {
  //   return this.getIngredients().then((ingredients) => {
  //     const test = _.chain(ingredients).map('id').max().value();
  //     return Promise.resolve(test);
  //   });
  // }
  //
  // createIngredient(ingredient: Ingredient): Promise<Ingredient> {
  //   return this.getMaxIngredientId().then((max) => {
  //     ingredient.id = max + 1;
  //     ingredient.image = '/assets/ingredient/' + ingredient.image;
  //
  //     return this.http.post(this.URL + 'ingredients', ingredient).toPromise().then((response) => response as Ingredient);
  //   });
  // }
  //
  // updateIngredient(ingredient: Ingredient): Promise<Ingredient> {
  //   return this.http.put(this.URL + 'ingredients/' + ingredient.id, ingredient).toPromise().then((response) => response as Ingredient);
  // }
  //
  // deleteIngredient(ingredient: Ingredient): Promise<Ingredient> {
  //   return this.http.delete(this.URL + 'ingredients/' + ingredient.id).toPromise().then((response) => response as Ingredient);
  // }
}
