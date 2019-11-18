export class Pizza {
  id: number;
  name: string;
  price: number;
  image?: string;

  constructor(id, name, price, image?) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = (image ? '/assets/avatar/' + image + '.png' : null);
  }
}
