import { Component } from '@angular/core';

import { model, db } from 'baqend';
import { NavController } from 'ionic-angular';
import { ChatPage } from '../chat/chat';

@Component({
  selector: 'page-chats',
  templateUrl: 'chats.html'
})
export class ChatsPage {

  messages: Array<model.Message>;

  constructor(private navCtrl: NavController) {
  }

  openChat(chat) {
    this.navCtrl.push(ChatPage, { id: chat.key });
  }

  getImageUrl(msg) {
    return new db.File(msg.face).url;
  }

  ionViewWillEnter() {
    // load all messages when entering the chats view
    db.Message
      .find()
      .resultList(message => this.messages = message);
  }

}
