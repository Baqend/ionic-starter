import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { ChatsPage } from '../pages/chats/chats';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DBReady } from './db.service';
import {ChatPage} from "../pages/chat/chat";
import { Storage } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    ChatsPage,
    ChatPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChatsPage,
    ChatPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [DBReady, Storage]
})
export class AppModule {}
