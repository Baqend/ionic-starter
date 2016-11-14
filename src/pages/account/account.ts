import { Component } from '@angular/core';
import { baqend } from 'baqend';
import { DBReady } from '../../app/db.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ToastController } from 'ionic-angular';


@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {

  db: baqend;
  user: FormGroup;

  constructor(private ready:DBReady, private formBuilder: FormBuilder, private toastCtrl: ToastController) {
    this.user = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  showErrorToast(error) {
    let toast = this.toastCtrl.create({
      message: error.message,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  register() {
    this.db.User.register(this.user.value.name, this.user.value.password).catch(this.showErrorToast.bind(this));
  }

  login() {
    this.db.User.login(this.user.value.name, this.user.value.password).catch(this.showErrorToast.bind(this));
  }

  logout() {
    this.db.User.logout();
  }

  ionViewCanEnter(): Promise<boolean> {
    // Check if the Baqend SDK is ready and wait for initialization
    return this.ready.resolve().then(db => this.db = db);
  }

}
