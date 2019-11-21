import {Injectable} from '@angular/core';
import {Message} from '../../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  messages: Message[];
  currentId: number;

  constructor() {
    this.messages = [];
    this.currentId = 0;

    const maxLifespan = 5000;
    // check once per second
    setInterval(() => {
      this.messages.forEach((item) => {
        if (Date.now() - maxLifespan > item.createdAt) {
          this.messages.shift();
        }
      });
    }, 1000);
  }

  getMessages(): Promise<Message[]> {
    return Promise.resolve(this.messages);
  }

  addMessage(value: string, type: string = 'primary') {
    const message = new Message(++this.currentId, value, type);
    this.messages.push(message);
  }

  closeMessage(message: Message) {
    this.messages.splice(this.messages.findIndex((m) => m.id === message.id), 1);
  }
}
