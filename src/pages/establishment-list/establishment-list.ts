import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { UbigeoProvider } from '../../providers/ubigeo';
import { DEFAULT_DEPARTAMENTO, DEFAULT_PROVINCIA, DEFAULT_DISTRITO, DEFAULT_NOT_SELECTED_UBIGEO } from '../../values/ubigeo';
import { LIST_SITUACION, LIST_CATEGORIA } from '../../values/establecimiento';

/**
 * Generated class for the EstablishmentListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'establishment-list-page'
})
@Component({
  selector: 'page-establishment-list',
  templateUrl: 'establishment-list.html',
})
export class EstablishmentListPage {

  searchTerm: string;
  items: any[];
  flags: { isLoading: boolean, menuSwipeEnabled: boolean };
  filters: { ubigeo: { departamento: string, provincia: string, distrito: string }, situacion: string, categoria: string };
  DepartamentosList: { departamento_id: string, label: string }[];
  ProvinciasList: { departamento_id: string, provincia_id: string, label: string }[];
  DistritosList: { departamento_id: string, provincia_id: string, distrito_id: string, label: string }[];
  SituacionList: { id: string, label: string }[];
  CategoriaList: { id: string, label: string }[];


  constructor(public navCtrl: NavController, public navParams: NavParams, public ubigeo: UbigeoProvider, public menuCtrl: MenuController) {
    this.searchTerm = null;
    this.flags = { isLoading: false, menuSwipeEnabled: true };
    this.items = [];
    this.enableMenuFilter();
    this.initFilters();
    this.setDefaultUbigeo();
    this.setLists();
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
    this.menuCtrl.enable(true, 'menu-filter-establishment');
    this.menuCtrl.enable(false, 'menu-filter-product');
  }

  searchEstablishment() {
    this.navCtrl.push('establishment-search-page', { "parentPage": this, "searchTerm": this.searchTerm });
  }
  
  searchByEstablishmentName(term) {
    this.searchTerm = term;
  }

  initFilters() {
    this.filters = {
      ubigeo: {
        departamento: null,
        provincia: null,
        distrito: null,
      },
      situacion: '',
      categoria: ''
    };
  }

  setLists() {
    this.SituacionList = LIST_SITUACION;
    this.CategoriaList = LIST_CATEGORIA;
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
