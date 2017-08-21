import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { model, db } from "baqend";

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {

  message: model.Message;

  constructor(private navParams: NavParams) {
  }

  getImageUrl(msg) {
    return new db.File(msg.face).url;
  }

  ionViewWillEnter() {
    // load message object from id parameter
    let id = this.navParams.get('id');
    db.Message.load(id)
      .then(msg => this.message = msg);
  }

}
