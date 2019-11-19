import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Ingredient} from '../../models/ingredient.model';
import {MessagesService} from '../../service/messages/messages.service';

@Component({
  selector: 'app-list-ingredients',
  templateUrl: './list-ingredients.component.html',
  styleUrls: ['./list-ingredients.component.scss']
})
export class ListIngredientsComponent implements OnInit {
  @Input() ingredients: Array<Ingredient>;
  @Input() type: string;
  @Output() eventEmitter: EventEmitter<Ingredient>;

  constructor(
    private messagesService: MessagesService
  ) {
    this.eventEmitter = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onSelect(ingredient) {
    this.eventEmitter.emit(ingredient);
    this.messagesService.addMessage(`L'ingrédient '${ingredient.name}' a été selectionné`, 'warning');
  }
}
