import {Component, OnInit} from '@angular/core';
import {PizzaService} from './services/pizza/pizza.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string;

  constructor(
    private pizzaService: PizzaService
  ) {
  }

  ngOnInit(): void {
    this.title = 'Pizza Party Jelly Time';
  }
}
