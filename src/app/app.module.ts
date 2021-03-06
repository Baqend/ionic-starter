import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { ChatsPage } from '../pages/chats/chats';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DBReady } from './db.service';
import { ChatPage } from '../pages/chat/chat';
import { IonicStorageModule } from '@ionic/storage';
import { AccountPage } from '../pages/account/account';
import { BrowserModule } from '@angular/platform-browser';
import { StatusBar } from '@ionic-native/status-bar';

@NgModule({
  declarations: [
    MyApp,
    ChatsPage,
    ChatPage,
    HomePage,
    TabsPage,
    AccountPage,
  ],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChatsPage,
    ChatPage,
    HomePage,
    TabsPage,
    AccountPage
  ],
  providers: [
    DBReady,
    StatusBar
  ]
})
export class AppModule {}
