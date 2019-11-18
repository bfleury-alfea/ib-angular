import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {PizzaComponent} from './Component/pizza/pizza.component';
import {AuthorComponent} from './Component/author/author.component';
import {ListIngredientsComponent} from './Component/list-ingredients/list-ingredients.component';
import {MenuComponent} from './Component/menu/menu.component';

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
