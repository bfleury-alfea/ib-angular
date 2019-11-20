import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

// Components //
import {AppComponent} from './app.component';
import {AuthorComponent} from './components/author/author.component';
import {HomeComponent} from './components/home/home/home.component';
import {ListIngredientsComponent} from './components/list-ingredients/list-ingredients.component';
import {MenuComponent} from './components/menu/menu.component';
import {MessagesComponent} from './components/messages/messages.component';
import {PizzaComponent} from './components/pizza/pizza.component';
import {PizzasComponent} from './components/pizzas/pizzas/pizzas.component';

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
    HomeComponent,
    ListIngredientsComponent,
    MenuComponent,
    MessagesComponent,
    PizzaComponent,
    PizzasComponent,

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
        component: HomeComponent
      },
      {
        path: 'pizzas',
        component: PizzasComponent,
      },
      {
        path: 'pizzas/:id',
        component: PizzaComponent,
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
