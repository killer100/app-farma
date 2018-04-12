import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EstablishmentSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'establishment-search-page'
})
@Component({
  selector: 'page-establishment-search',
  templateUrl: 'establishment-search.html',
})
export class EstablishmentSearchPage {
  @ViewChild('searchInput') searchInput;
  searchTerm: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let searchTerm = this.navParams.get("searchTerm");
    if (searchTerm)
      this.searchTerm = searchTerm;
  }

  ionViewDidEnter() {
    setTimeout(() => {
      this.searchInput.setFocus();
    }, 200);
  }

  removeText() {
    this.searchTerm = '';
    this.searchInput.setFocus();
  }

  onSubmit() {
    if (this.searchTerm.length == 0)
      return false;
    this.navParams.get("parentPage").searchByEstablishmentName(this.searchTerm);
    this.navCtrl.pop();
  }

}
