import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
// Components //
import {HomePageComponent} from './components/home-page/home-page.component';
import {IngredientFormPageComponent} from './components/ingredient-form-page/ingredient-form-page.component';
import {IngredientPageComponent} from './components/ingredient-page/ingredient-page.component';
import {IngredientsPageComponent} from './components/ingredients-page/ingredients-page.component';
import {PizzaFormPageComponent} from './components/pizza-form-page/pizza-form-page.component';
import {PizzaPageComponent} from './components/pizza-page/pizza-page.component';
import {PizzasPageComponent} from './components/pizzas-page/pizzas-page.component';
// Services //
import {PizzaResolverService} from './services/pizza-resolver/pizza-resolver.service';


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
        {
          path: '',
          component: HomePageComponent
        },
        {
          path: 'pizzas',
          component: PizzasPageComponent,
          resolve: {
            pizzas: PizzaResolverService
          }
        },
        {
          path: 'pizzas/create',
          component: PizzaFormPageComponent,
        },
        {
          path: 'pizzas/:id',
          component: PizzaPageComponent,
        },
        {
          path: 'ingredients',
          component: IngredientsPageComponent,
        },
        {
          path: 'ingredients/create',
          component: IngredientFormPageComponent,
        },
        {
          path: 'ingredients/:id',
          component: IngredientPageComponent,
        },
      ]
    )],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
