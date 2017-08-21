import { Component } from '@angular/core';
import {baqend, db} from 'baqend';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ToastController } from 'ionic-angular';


@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {

  db: baqend = db;
  user: FormGroup;

  constructor(private formBuilder: FormBuilder, private toastCtrl: ToastController) {
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
    db.User.register(this.user.value.name, this.user.value.password).catch(this.showErrorToast.bind(this));
  }

  login() {
    db.User.login(this.user.value.name, this.user.value.password).catch(this.showErrorToast.bind(this));
  }

  logout() {
    db.User.logout();
  }

}
