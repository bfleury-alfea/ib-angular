import {Ingredient} from './ingredient.model';

export class Pizza {
  id: number;
  name: string;
  price: number;
  image?: string;
  ingredients: Ingredient[];

  constructor(id, name, price, image?, ingredients?) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = (image ? '/assets/pizza/' + image : null);
    this.ingredients = (ingredients ? ingredients : []);
  }
}
