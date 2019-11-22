import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
// Components //
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthorComponent} from './components/author/author.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {IngredientFormPageComponent} from './components/ingredient-form-page/ingredient-form-page.component';
import {IngredientPageComponent} from './components/ingredient-page/ingredient-page.component';
import {IngredientsPageComponent} from './components/ingredients-page/ingredients-page.component';
import {ListIngredientsComponent} from './components/list-ingredients/list-ingredients.component';
import {MenuComponent} from './components/menu/menu.component';
import {MessagesComponent} from './components/messages/messages.component';
import {PizzaComponent} from './components/pizza/pizza.component';
import {PizzaFormPageComponent} from './components/pizza-form-page/pizza-form-page.component';
import {PizzaPageComponent} from './components/pizza-page/pizza-page.component';
import {PizzasPageComponent} from './components/pizzas-page/pizzas-page.component';
// Directives //
import {BgDirective} from './directives/bg/bg.directive';
import {DCEmptyDirective} from './directives/dc-empty/dc-empty.directive';
import {DropdownToggleDirective} from './directives/dropdown-toogle/dropdown-toggle.directive';
import {TestDirective} from './directives/test/test.directive';
// Pipes //
import {AgePipe} from './pipes/age/age.pipe';
import {CurrencyPipe} from './pipes/currency/currency.pipe';
import {SortPipe} from './pipes/sort/sort.pipe';
import {TaxPipe} from './pipes/tax/tax.pipe';
import {TestPipe} from './pipes/test/test.pipe';
import {IngredientComponent} from './components/ingredient/ingredient.component';
import { UserFormPageComponent } from './components/user-form-page/user-form-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    HomePageComponent,
    IngredientComponent,
    IngredientFormPageComponent,
    IngredientPageComponent,
    IngredientsPageComponent,
    ListIngredientsComponent,
    MenuComponent,
    MessagesComponent,
    PizzaComponent,
    PizzaFormPageComponent,
    PizzaPageComponent,
    PizzasPageComponent,
    UserFormPageComponent,

    BgDirective,
    DCEmptyDirective,
    DropdownToggleDirective,
    TestDirective,

    AgePipe,
    CurrencyPipe,
    SortPipe,
    TaxPipe,
    TestPipe,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
