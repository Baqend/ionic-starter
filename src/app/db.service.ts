import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { util, db } from 'baqend';


export class DeviceStorage extends util.TokenStorage {

  constructor(origin, token, private storage) {
    super(origin, token);
  }

  _saveToken(origin, token, temporary) {
    if (token) {
      this.storage.set(origin, token);
    } else {
      this.storage.remove(origin);
    }
  };

}

@Injectable()
export class DBReady {
  constructor(private storage: Storage) {
    let appName = "app-starter";

    db.configure({tokenStorageFactory: {
      create: origin => {
        return storage.get(origin).then((token) => {
          return new DeviceStorage(origin, token, storage);
        })
      }
    }});

    // Change the name to your Baqend instance name
    db.connect(appName, true);
  }


  resolve(): Promise<any> {
    return db.ready();
  }
}

export const DB_PROVIDERS = [DBReady];
