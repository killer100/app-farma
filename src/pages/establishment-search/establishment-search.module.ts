import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstablishmentSearchPage } from './establishment-search';

@NgModule({
  declarations: [
    EstablishmentSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(EstablishmentSearchPage),
  ],
})
export class EstablishmentSearchPageModule {}
