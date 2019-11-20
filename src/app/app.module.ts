import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
// Components //
import {PizzaComponent} from './components/pizza/pizza.component';
import {AuthorComponent} from './components/author/author.component';
import {ListIngredientsComponent} from './components/list-ingredients/list-ingredients.component';
import {MenuComponent} from './components/menu/menu.component';
import {MessagesComponent} from './components/messages/messages.component';
// Pipes //
import {TaxPipe} from './pipes/tax/tax.pipe';
import {TestPipe} from './pipes/test/test.pipe';
import {AgePipe} from './pipes/age/age.pipe';
import { CurrencyPipe } from './pipes/currency/currency.pipe';
import { SortPipe } from './pipes/sort/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    AuthorComponent,
    ListIngredientsComponent,
    MenuComponent,
    MessagesComponent,

    TaxPipe,
    TestPipe,
    AgePipe,
    CurrencyPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
