import { Component } from '@angular/core';

import { baqend, model } from 'baqend';
import { DBReady } from '../../app/db.service';
import { NavController } from 'ionic-angular';
import { ChatPage } from '../chat/chat';

@Component({
  selector: 'page-chats',
  templateUrl: 'chats.html'
})
export class ChatsPage {

  db: baqend;
  messages: Array<model.Message>;

  constructor(private ready: DBReady, private navCtrl: NavController) {
  }

  openChat(chat) {
    this.navCtrl.push(ChatPage, { id: chat.key });
  }

  getImageUrl(msg) {
    return new this.db.File(msg.face).url;
  }

  ionViewCanEnter(): Promise<baqend> {
    // Check if the Baqend SDK is ready and wait for initialization
    return this.ready.resolve().then(db => this.db = db);
  }

  ionViewWillEnter() {
    // load all messages when entering the chats view
    this.db.Message
      .find()
      .resultList(message => this.messages = message);
  }

}
