export class Message {
  id: number;
  value: string;
  type: ('success' | 'warning' | 'danger');
  createdAt: number;

  constructor(id, value, type) {
    this.id = id;
    this.value = value;
    this.type = type;
    this.createdAt = Date.now();
  }
}
