import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pizza} from '../../models/pizza.model';
import {MessagesService} from '../../services/messages/messages.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza-page.component.html',
  styleUrls: ['./pizza-page.component.scss']
})
export class PizzaPageComponent implements OnInit {
  @Input() pizza: Pizza;
  @Input() select: boolean;
  @Output() eventEmitter: EventEmitter<Pizza>;

  constructor(
    private messagesService: MessagesService
  ) {
    this.eventEmitter = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onSelect(event) {
    this.eventEmitter.emit(this.pizza);
    if (this.select) {
      this.messagesService.addMessage(`La pizza '${this.pizza.name}' a été selectionnée`, 'primary');
    } else {
      this.messagesService.addMessage(`La pizza '${this.pizza.name}' a été déselectionnée`, 'danger');
    }
  }
}