import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstablishmentListPage } from './establishment-list';
import { UbigeoProvider } from '../../providers/ubigeo';

@NgModule({
  declarations: [
    EstablishmentListPage,
  ],
  imports: [
    IonicPageModule.forChild(EstablishmentListPage),
  ],
  providers: [
    UbigeoProvider
  ]
})
export class EstablishmentListPageModule { }
