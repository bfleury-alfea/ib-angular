import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Ingredient} from '../../models/ingredient.model';

@Component({
  selector: 'app-list-ingredients',
  templateUrl: './list-ingredients.component.html',
  styleUrls: ['./list-ingredients.component.scss']
})
export class ListIngredientsComponent implements OnInit {
  @Input() ingredients: Array<Ingredient>;
  @Input() type: string;
  @Output() eventEmitter: EventEmitter<Ingredient>;

  constructor() {
    this.eventEmitter = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onSelect(event) {
    this.eventEmitter.emit(event);
  }
}
