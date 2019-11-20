import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {fromEvent, Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map, switchMap} from 'rxjs/operators';
import {Pizza} from '../../models/pizza.model';
import {PizzaService} from '../../services/pizza/pizza.service';

@Component({
  selector: 'app-page-pizza',
  templateUrl: './pizza-page.component.html',
  styleUrls: ['./pizza-page.component.scss']
})
export class PizzaPageComponent implements OnInit, AfterViewInit {
  pizza: Pizza;
  isFirst: boolean;
  isLast: boolean;

  @ViewChild('inputTest', {static: false}) inputTest: ElementRef;

  constructor(
    private pizzaService: PizzaService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    // Via une Promesse //
    this.pizzaService
      .getPizza(+this.route.snapshot.paramMap.get('id'))
      .then((pizza) => this.pizza = pizza);

    // Via un observable //
    this.route.params
      .pipe(
        switchMap((params: Params) => this.pizzaService.getPizza(+params.id))
      )
      .subscribe(
        pizza => {
          this.pizza = pizza;
          this.pizzaService.getMinPizzaId().then((min) => this.isFirst = (min === this.pizza.id));
          this.pizzaService.getMaxPizzaId().then((max) => this.isLast = (max === this.pizza.id));
        }
      );

    this.isFirst = true;
    this.isLast = true;


    const observable = new Observable(observer => {
      let i = 0;
      const interval = setInterval(() => {
        observer.next(++i);

        if (10 === i) {
          observer.complete();
          clearInterval(interval);
        }

        if (3 === i) {
          // observer.error('Une erreur...');
        }
      }, 1000);
    });

    observable
      .pipe(
        filter((value) => value !== 3)
      )
      .subscribe(
        (value) => console.log(value),
        (error) => console.log(error),
        () => console.log('Terminé')
      );
  }

  ngAfterViewInit() {
    fromEvent(this.inputTest.nativeElement, 'keyup')
      .pipe(
        map((event: KeyboardEvent) => event.key),
        filter((key) => 'Enter' !== key),
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe((key) => console.log(this.inputTest.nativeElement.value));
  }
}
