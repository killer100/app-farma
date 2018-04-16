import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the AlertWriteTextPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'alert-write-text-page'
})
@Component({
  selector: 'page-alert-write-text',
  templateUrl: 'alert-write-text.html',
})
export class AlertWriteTextPage {
  text: string;
  onSend: Function;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    let txt = navParams.get('text');
    if (txt)
      this.text = txt;
    this.onSend = navParams.get('onSend');
  }

  ionViewDidLoad() {

  }

  send() {
    if (!this.text) {
      return false;
    }

    if (this.text.trim().length == 0) {
      this.text = '';
      return false;
    }
    if (typeof this.onSend === 'function')
      this.onSend(this.text);
    this.dismiss();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
