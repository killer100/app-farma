import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlertRegisterPage } from './alert-register';

@NgModule({
  declarations: [
    AlertRegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(AlertRegisterPage),
  ],
})
export class AlertRegisterPageModule {}
