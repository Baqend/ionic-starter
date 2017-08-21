import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { ChatsPage } from '../chats/chats';
import { AccountPage } from '../account/account';
import { DBReady } from "../../app/db.service";


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = ChatsPage;
  tab3Root: any = AccountPage;

  constructor(private ready: DBReady) {}

  ionViewCanEnter() {
    // Check if the Baqend SDK is ready and wait for initialization

    return this.ready.resolve();
  }
}
