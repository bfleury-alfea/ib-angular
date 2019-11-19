export class Message {
  id: number;
  value: string;
  type: ('success' | 'warning' | 'danger');

  constructor(id, value, type) {
    this.id = id;
    this.value = value;
    this.type = type;
  }
}
