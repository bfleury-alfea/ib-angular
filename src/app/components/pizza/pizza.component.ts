import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pizza} from '../../models/pizza.model';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {
  @Input() pizza: Pizza;
  @Input() select: boolean;
  @Output() eventEmitter: EventEmitter<Pizza>;

  constructor() {
    this.eventEmitter = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onSelect(event) {
    this.eventEmitter.emit(this.pizza);
  }
}
