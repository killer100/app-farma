import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { ProductProvider } from '../../providers/product';
import { UbigeoProvider } from '../../providers/ubigeo';
import { DEFAULT_DEPARTAMENTO, DEFAULT_DISTRITO, DEFAULT_PROVINCIA, DEFAULT_NOT_SELECTED_UBIGEO } from '../../values/ubigeo';

/**
 * Generated class for the BuscarProductoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'product-list-page'
})
@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html'
})
export class ProductListPage {
  items: { id: string, value: string }[];
  flags: { isLoading: boolean, noResultsFound: boolean, menuSwipeEnabled: boolean };
  searchTerm: string;
  itemToSearch: { id: string, value: string };
  pagination: { items: string[], page: number, pageSize: number, total: number };
  filters: { ubigeo: { departamento: string, provincia: string, distrito: string }, situacion: string, categoria: string };
  DepartamentosList: { departamento_id: string, label: string }[];
  ProvinciasList: { departamento_id: string, provincia_id: string, label: string }[];
  DistritosList: { departamento_id: string, provincia_id: string, distrito_id: string, label: string }[];


  constructor(public navCtrl: NavController, public navParams: NavParams, private productProvider: ProductProvider, public menuCtrl: MenuController, private ubigeo: UbigeoProvider) {
    this.enableMenuFilter();
    this.searchTerm = null;
    this.itemToSearch = null;
    this.initializeItems();
    this.initializePagination();
    this.initializeFilters();
    this.setDefaultUbigeo();
    this.flags = { isLoading: false, noResultsFound: false, menuSwipeEnabled: true };
  }

  ionViewDidLoad() {
  }

  ionViewWillLeave() {
    this.flags.menuSwipeEnabled = false;
  }

  ionViewDidEnter() {
    this.flags.menuSwipeEnabled = true;
  }

  enableMenuFilter() {
    this.menuCtrl.enable(true, 'menu-filter-product');
    this.menuCtrl.enable(false, 'menu-filter-establishment');
  }

  initializeItems() {
    this.items = [];
  }

  initializePagination() {
    this.pagination = {
      items: [],
      page: 1,
      pageSize: 10,
      total: 0
    };
  }

  initializeFilters() {
    this.filters = {
      ubigeo: {
        departamento: '',
        provincia: '',
        distrito: '',
      },
      situacion: '',
      categoria: ''
    };
  }

  openPageSearchProduct() {
    this.navCtrl.push('product-search-page', { "parentPage": this });
  }

  openProductDetailPage(id: string) {
    this.navCtrl.push('producto-detail-page');
  }

  setItemToSearch(item: { id: string, value: string }) {
    this.itemToSearch = item;
    this.searchTerm = this.itemToSearch.value;
    this.initializePagination();
    this.getProducts();
  }

  getProducts() {
    this.flags.isLoading = true;
    this.productProvider
      .listProductsWithPrice(this.itemToSearch, this.pagination.page, this.pagination.pageSize)
      .then((data: any) => {
        this.pagination = data;
        this.flags.isLoading = false;
      });
  }

  setDefaultUbigeo() {
    let defaultDistrito = () => {
      this.listDistritos(() => {
        this.filters.ubigeo.distrito = DEFAULT_DISTRITO;
      });
    };

    let defaultProvincia = () => {
      this.filters.ubigeo.provincia = DEFAULT_PROVINCIA;
      defaultDistrito();
    };

    let defaultDepartamento = () => {
      this.filters.ubigeo.departamento = DEFAULT_DEPARTAMENTO;
      this.listProvincias(() => {
        defaultProvincia();
      });
    };

    this.listDepartamentos(() => {
      defaultDepartamento();
    });
  }

  listDepartamentos(success: Function = null) {
    this.ubigeo.ListDepartamentos().then((departamentos: any) => {
      this.DepartamentosList = departamentos;
      if (success)
        success();
    });
  }

  listProvincias(success: Function = null) {
    this.filters.ubigeo.provincia = DEFAULT_NOT_SELECTED_UBIGEO;
    this.filters.ubigeo.distrito = DEFAULT_NOT_SELECTED_UBIGEO;
    this.ubigeo.ListProvincias(this.filters.ubigeo.departamento).then((provincias: any) => {
      this.ProvinciasList = provincias;
      if (success)
        success();
    });
  }

  listDistritos(success: Function = null) {
    this.filters.ubigeo.distrito = DEFAULT_NOT_SELECTED_UBIGEO;
    this.ubigeo.ListDistritos(this.filters.ubigeo.departamento, this.filters.ubigeo.provincia).then((distritos: any) => {
      this.DistritosList = distritos;
      if (success)
        success();
    });
  }


}
