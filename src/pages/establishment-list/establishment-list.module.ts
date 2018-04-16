import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstablishmentListPage } from './establishment-list';
import { UbigeoProvider } from '../../providers/ubigeo';
import { EstablishmentProvider } from '../../providers/establishment';

@NgModule({
  declarations: [
    EstablishmentListPage,
  ],
  imports: [
    IonicPageModule.forChild(EstablishmentListPage),
  ],
  providers: [
    UbigeoProvider,
    EstablishmentProvider
  ]
})
export class EstablishmentListPageModule { }
