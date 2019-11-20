import {Component, OnInit} from '@angular/core';
import {Message} from '../../models/message.model';
import {MessagesService} from '../../services/messages/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  messages: Array<Message>;

  constructor(private messagesService: MessagesService) {
  }

  ngOnInit() {
    this.messagesService.getMessages().then((messages) => this.messages = messages);
  }

  closeAlert(message) {
    this.messagesService.closeMessage(message);
  }
}
