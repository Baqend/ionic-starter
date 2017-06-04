import { Injectable } from '@angular/core';
import { EntityManagerFactory } from "baqend";
import { Storage } from '@ionic/storage';
import { util } from 'baqend';


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
  db: any;

  constructor(private storage: Storage) {
    let appName = "app-starter";

    let emf = new EntityManagerFactory({tokenStorageFactory: {
      create: origin => {
        return storage.get(origin).then((token) => {
          return new DeviceStorage(origin, token, storage);
        })
      }
    }});

    this.db = emf.createEntityManager(true);

    // Change the name to your Baqend instance name
    emf.connect(appName, true);
  }


  resolve(): Promise<any> {
    return this.db.ready();
  }
}

export const DB_PROVIDERS = [DBReady];
