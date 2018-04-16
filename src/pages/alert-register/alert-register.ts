import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the AlertRegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'alert-register-page'
})
@Component({
  selector: 'page-alert-register',
  templateUrl: 'alert-register.html',
})
export class AlertRegisterPage {

  form: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
  }

  editDescription() {
    let onSend = (text: string) => { this.form.description = text.trim(); };
    let data = { text: this.form.description, onSend: onSend };
    let profileModal = this.modalCtrl.create('alert-write-text-page', data);
    profileModal.present({
      keyboardClose: false
    });
  }

}
