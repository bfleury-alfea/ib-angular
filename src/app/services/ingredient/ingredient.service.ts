import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Ingredient} from '../../models/ingredient.model';
import * as _ from 'lodash';
import {Observable} from 'rxjs';
import {delay, flatMap, map} from 'rxjs/operators';

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

  getIngredient(id: number): Observable<Ingredient> {
    return this.http.get(this.URL + 'ingredients/' + id).pipe(map((response) => response as Ingredient));
  }

  getIngredientExists(name: string): Observable<boolean> {
    return this.http.get(this.URL + 'ingredients?name=' + name).pipe(map((response: any[]) => (response.length !== 0)), delay(2000));
  }

  getMinIngredientId(): Observable<number> {
    return this.getIngredients().pipe(map((ingredients) => {
      return _.chain(ingredients).map('id').min().value();
    }));
  }

  getMaxIngredientId(): Observable<number> {
    return this.getIngredients().pipe(map((ingredients) => {
      return _.chain(ingredients).map('id').max().value();
    }));
  }

  createIngredient(ingredient: Ingredient): Observable<Ingredient> {
    ingredient.image = '/assets/ingredients/' + ingredient.image;
    return this.getMaxIngredientId().pipe(
      map((max) => {
        ingredient.id = max + 1;
      }),
      flatMap(() => {
        return this.http.post(this.URL + 'ingredients', ingredient).pipe(map(((response) => response as Ingredient)));
      })
    );
  }

  updateIngredient(ingredient: Ingredient): Observable<Ingredient> {
    return this.http.put(this.URL + 'ingredients/' + ingredient.id, ingredient).pipe(map(((response) => response as Ingredient)));
  }

  deleteIngredient(ingredient: Ingredient): Observable<Ingredient> {
    return this.http.delete(this.URL + 'ingredients/' + ingredient.id).pipe(map(((response) => response as Ingredient)));
  }
}
