import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {PizzaComponent} from './components/pizza/pizza.component';
import {AuthorComponent} from './components/author/author.component';
import {ListIngredientsComponent} from './components/list-ingredients/list-ingredients.component';
import {MenuComponent} from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    AuthorComponent,
    ListIngredientsComponent,
    MenuComponent
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
