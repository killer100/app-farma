import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductListPage } from './product-list';
import { Keyboard } from '@ionic-native/keyboard';
import { UbigeoProvider } from '../../providers/ubigeo';

@NgModule({
  declarations: [
    ProductListPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductListPage),
  ],
  providers: [
    Keyboard,
    UbigeoProvider
  ]
})
export class ProductoListModule { }
