import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ViewController } from "ionic-angular";
@IonicPage()
@Component({
  selector: "page-about",
  templateUrl: "about.html"
})
export class AboutPage {
  about = `
   This app is about selecting categories and their limits on post numbers. 
   As you select the category from settings then that much categories are displyed or selected 
   in home page for showcase and that can be of multiple selection type. 
   Once you select that in home page you have select only one category so that you can view all that 
   in one card. Further on clicking view more you can get detailed view of news feed. `;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController
  ) {}
  onClickClose(remove = false) {
    this.viewCtrl.dismiss(remove);
  }
}
