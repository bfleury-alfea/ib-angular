import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pizza} from '../../models/pizza.model';
import {MessagesService} from '../../services/messages/messages.service';
import {PizzaService} from '../../services/pizza/pizza.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {
  @Input() pizza: Pizza;
  @Input() select: boolean;
  @Output() eventEmitter: EventEmitter<Pizza>;
  edit: boolean;

  constructor(
    private messagesService: MessagesService,
    private pizzaService: PizzaService
  ) {
    this.eventEmitter = new EventEmitter();
  }

  ngOnInit() {
    this.edit = false;
  }

  onSelect(event) {
    this.eventEmitter.emit(this.pizza);
    if (this.select) {
      this.messagesService.addMessage(`La pizza '${this.pizza.name}' a été selectionnée`, 'primary');
    } else {
      this.messagesService.addMessage(`La pizza '${this.pizza.name}' a été déselectionnée`, 'danger');
    }
  }

  editPizza() {
    this.edit = true;
  }

  save() {
    this.pizzaService.updatePizza(this.pizza).then((pizza) => {
      this.messagesService.addMessage('Pizza saved');
      this.edit = false;
    });
  }

  delete() {
    this.pizzaService.deletePizza(this.pizza).then((pizza) => {
      this.messagesService.addMessage('Pizza deleted');
    });
    this.eventEmitter.emit(null);
  }
}
