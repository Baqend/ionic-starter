import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import {baqend, model} from "baqend";
import {DBReady} from "../../app/db.service";

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {

  db: baqend;
  message: model.Message;

  constructor(private ready:DBReady, private navParams: NavParams) {}

  ionViewCanEnter() {
    // Check if the Baqend SDK is ready and wait for initialization
    return this.ready.resolve().then(db => this.db = db);
  }

  ionViewWillEnter() {
    // load message object from id parameter
    let id = this.navParams.get('id');
    this.db.Message.load(id)
      .then(msg => {
        // convert url to file object
        msg.face = new this.db.File(msg.face);
        this.message = msg;
      });
  }

}
