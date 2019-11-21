import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
// Components //
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthorComponent} from './components/author/author.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {ListIngredientsComponent} from './components/list-ingredients/list-ingredients.component';
import {MenuComponent} from './components/menu/menu.component';
import {MessagesComponent} from './components/messages/messages.component';
import {PizzaComponent} from './components/pizza/pizza.component';
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
// Services //
import {PizzaResolverService} from './services/pizza-resolver/pizza-resolver.service';
import {FakeApiService} from './services/fake-api.service';

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
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(FakeApiService),
    AppRoutingModule,
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
