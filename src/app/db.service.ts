import {Injectable} from "@angular/core";
import { default as db } from "baqend";
import { Storage } from "@ionic/storage";

let TokenStorage = db.util.TokenStorage;

export class DeviceStorage extends TokenStorage {

  static create(origin, storage) {
    return storage.get(origin).then(function(token) {
      return token;
    }, function() {
      //if the key is not found an error is thrown
      return null;
    }).then(function(token) {
      return new DeviceStorage(origin, token);
    });
  }

  constructor(private origin, private token) {
    super(origin, token);
  }

  _saveToken = function(origin, token) {
    if (token) {
      this.storage.set(origin, token);
    }
  };

}

@Injectable()
export class DBReady {
  db: any;

  constructor(private storage: Storage) {
    let emf = new db.EntityManagerFactory({tokenStorageFactory: {
      create: origin => {
        return DeviceStorage.create(origin, this.storage)
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
