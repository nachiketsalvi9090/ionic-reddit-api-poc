import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-view-details',
  templateUrl: 'view-details.html',
})
export class ViewDetailsPage {
post;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.post= this.navParams.get('post');
  }

 

}
