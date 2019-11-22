import {NgModule} from '@angular/core';
import {AngularFireAuthGuard, AngularFireAuthGuardModule, redirectUnauthorizedTo} from '@angular/fire/auth-guard';
import {RouterModule} from '@angular/router';
// Components //
import {HomePageComponent} from './components/home-page/home-page.component';
import {IngredientFormPageComponent} from './components/ingredient-form-page/ingredient-form-page.component';
import {IngredientPageComponent} from './components/ingredient-page/ingredient-page.component';
import {IngredientsPageComponent} from './components/ingredients-page/ingredients-page.component';
import {LoginFormPageComponent} from './components/login-form-page/login-form-page.component';
import {PizzaFormPageComponent} from './components/pizza-form-page/pizza-form-page.component';
import {PizzaPageComponent} from './components/pizza-page/pizza-page.component';
import {PizzasPageComponent} from './components/pizzas-page/pizzas-page.component';
import {UserFormPageComponent} from './components/user-form-page/user-form-page.component';
// Services //
import {PizzaResolverService} from './services/pizza-resolver/pizza-resolver.service';

const redirect = (() => redirectUnauthorizedTo(['login']));

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      [
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
          canActivate: [AngularFireAuthGuard],
          data: {authGuardPipe: redirect}
        },
        {
          path: 'pizzas/:id',
          component: PizzaPageComponent
        },
        {
          path: 'ingredients',
          component: IngredientsPageComponent
        },
        {
          path: 'ingredients/create',
          component: IngredientFormPageComponent,
          canActivate: [AngularFireAuthGuard],
        },
        {
          path: 'ingredients/:id',
          component: IngredientPageComponent
        },
        // {
        //   path: 'users',
        //   component: UsersPageComponent
        // },
        // {
        //   path: 'users/:id',
        //   component: UserPageComponent
        // },
        {
          path: 'users/create',
          component: UserFormPageComponent
        },
        {
          path: 'users/login',
          component: LoginFormPageComponent
        }
      ]
    ),
    AngularFireAuthGuardModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
