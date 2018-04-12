import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl } from '@angular/forms';
import { ProductProvider } from '../../providers/product';
import { ProductListPage } from '../product-list/product-list';
import 'rxjs/add/operator/debounceTime';

/**
 * Generated class for the ProductSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'product-search-page'
})
@Component({
  selector: 'page-product-search',
  templateUrl: 'product-search.html',
})
export class ProductSearchPage {
  @ViewChild('searchInput') searchInput;
  textInput: FormControl;
  searchTerm: string = "";
  items: any[];
  flags: { loadingResults: boolean };

  constructor(public navCtrl: NavController, public navParams: NavParams, private productProvider: ProductProvider) {
    this.initializeVars();
    this.onSearchInputChange();
  }

  ionViewDidEnter() {
    setTimeout(() => {
      this.searchInput.setFocus();
    }, 200);
  }

  initializeVars() {
    this.textInput = new FormControl('');
    this.items = [];
    this.flags = { loadingResults: false };
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

  onSearchInputChange() {

    let search = (value) => {
      this.searchTerm = value;
      this.searchProduct();
    };

    this.textInput
      .valueChanges
      .debounceTime(500)
      .subscribe(search);
  }

  searchProduct() {
    if (this.searchTerm.length > 0) {
      this.flags.loadingResults = true;
      this.productProvider
        .listAutocompleteByName(this.searchTerm)
        .then((data: any[]) => {
          this.items = data;
          this.flags.loadingResults = false;
        });
    }
  }

  onSelectItem(item) {
    let parentPage: ProductListPage = this.navParams.get("parentPage");
    parentPage.setItemToSearch(item);
    this.navCtrl.pop();
  }

}
