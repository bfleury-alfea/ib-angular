import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

// Components //
import {AppComponent} from './app.component';
import {AuthorComponent} from './components/author/author.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {ListIngredientsComponent} from './components/list-ingredients/list-ingredients.component';
import {MenuComponent} from './components/menu/menu.component';
import {MessagesComponent} from './components/messages/messages.component';
import {PizzaComponent} from './components/pizza/pizza.component';
import {PizzaPageComponent} from './components/pizza-page/pizza-page.component';
import {PizzasPageComponent} from './components/pizzas-page/pizzas-page.component';

// Pipes //
import {AgePipe} from './pipes/age/age.pipe';
import {CurrencyPipe} from './pipes/currency/currency.pipe';
import {SortPipe} from './pipes/sort/sort.pipe';
import {TaxPipe} from './pipes/tax/tax.pipe';
import {TestPipe} from './pipes/test/test.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    HomePageComponent,
    ListIngredientsComponent,
    MenuComponent,
    MessagesComponent,
    PizzaComponent,
    PizzaPageComponent,
    PizzasPageComponent,

    AgePipe,
    CurrencyPipe,
    SortPipe,
    TaxPipe,
    TestPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomePageComponent
      },
      {
        path: 'pizzas',
        component: PizzasPageComponent,
      },
      {
        path: 'pizzas/:id',
        component: PizzaPageComponent,
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
