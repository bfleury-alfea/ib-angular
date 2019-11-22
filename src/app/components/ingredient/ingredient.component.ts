import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Ingredient} from '../../models/ingredient.model';
import {MessagesService} from '../../services/messages/messages.service';
import {IngredientService} from '../../services/ingredient/ingredient.service';


@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})
export class IngredientComponent implements OnInit {
  @Input() ingredient: Ingredient;
  @Input() select: boolean;
  @Output() eventEmitter: EventEmitter<Ingredient>;
  edit: boolean;

  constructor(
    private messagesService: MessagesService,
    private ingredientService: IngredientService
  ) {
    this.eventEmitter = new EventEmitter();
  }

  ngOnInit() {
  }

  onSelect(event) {
    this.eventEmitter.emit(this.ingredient);
    if (this.select) {
      this.messagesService.addMessage(`L'ingredient '${this.ingredient.name}' a été selectionné`, 'primary');
    } else {
      this.messagesService.addMessage(`L'ingredient '${this.ingredient.name}' a été déselectionné`, 'danger');
    }
  }

  editPizza() {
    this.edit = true;
  }

  save() {
    this.ingredientService.updateIngredient(this.ingredient).subscribe((ingredient) => {
      this.messagesService.addMessage('Ingredient saved');
      this.edit = false;
    });
  }

  delete() {
    this.ingredientService.deleteIngredient(this.ingredient).subscribe((ingredient) => {
      this.messagesService.addMessage('Ingredient deleted');
    });
    this.eventEmitter.emit(null);
  }
}
