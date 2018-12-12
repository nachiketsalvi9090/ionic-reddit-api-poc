import { Component } from "@angular/core";
import { NavController, NavParams, ModalController } from "ionic-angular";
import { ResetPasswordPage } from "../reset-password/reset-password";
import { AboutPage } from "../about/about";
import { UserService } from "../../services/user";

@Component({
  selector: "page-setting",
  templateUrl: "setting.html"
})
export class SettingPage {
  categories: String[];
  tempCategories:String[];
  numberOfItemToDisplay: Number[];
  postLimit;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private modelCtrl: ModalController,
    private userService: UserService
  ) {
    this.categories = this.userService.categories;
    this.tempCategories=this.categories;
    this.postLimit = this.userService.postLimit;
    this.numberOfItemToDisplay = this.userService.numberOfItemToDisplay;
  }
  onClickResetPassword() {
    this.navCtrl.push(ResetPasswordPage);
  }
  onClickAbout() {
    const aboutPageModel = this.modelCtrl.create(AboutPage);
    aboutPageModel.present();
    
  }
  onCategorySelect() {
    this.userService.categories = [];
    this.userService.categories = this.categories;
    this.categories = this.tempCategories;
  }
  onnumberOfItemToDisplaySelect() {
    this.userService.postLimit = this.postLimit;
  }
}
