import {Injectable} from "@angular/core";
import { EntityManagerFactory } from "baqend";
import { Storage } from "@ionic/storage";
import {util} from 'baqend';


export class DeviceStorage extends util.TokenStorage {

  constructor(origin, token, private storage) {
    super(origin, token);
  }

  _saveToken(origin, token, temporary) {
    if (token) {
      this.storage.set(origin, token);
    }
  };

}

@Injectable()
export class DBReady {
  db: any;

  constructor(private storage: Storage) {
    let emf = new EntityManagerFactory({tokenStorageFactory: {
      create: origin => {
        return storage.get(origin).then((token) => {
          return new DeviceStorage(origin, token, storage);
        })
      }
    }});

    this.db = emf.createEntityManager(true);
    emf.connect("app-starter", true);
  }


  resolve(): Promise<any> {
    return this.db.ready();
  }
}

export const DB_PROVIDERS = [DBReady];
