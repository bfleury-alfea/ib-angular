export class Ingredient {
  id: number;
  name: string;
  weight: number;
  price: number;
  image?: string;

  constructor(id, name, weight, price, image) {
    this.id = id;
    this.name = name;
    this.weight = weight;
    this.price = price;
    this.image = '/assets/ingredients/' + image;
  }
}
