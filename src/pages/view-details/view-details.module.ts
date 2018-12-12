import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewDetailsPage } from './view-details';

@NgModule({
  declarations: [
    ViewDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewDetailsPage),
  ],
})
export class ViewDetailsPageModule {}
