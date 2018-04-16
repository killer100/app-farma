import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EstablishmentDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'establishment-detail-page'
})
@Component({
  selector: 'page-establishment-detail',
  templateUrl: 'establishment-detail.html',
})
export class EstablishmentDetailPage {

  establishment: { data: any, personas: Array<any> } = { data: {}, personas: [] };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.establishment = this.navParams.get("establishment");
  }

  ionViewDidLoad() {
  }

}
