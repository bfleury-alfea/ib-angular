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
