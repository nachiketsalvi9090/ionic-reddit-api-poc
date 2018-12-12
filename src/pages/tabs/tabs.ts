import { Component } from "@angular/core";
import { HomePage } from "../home/home";
import { SettingPage } from "../setting/setting";
import { AuthenticateService } from "../../services/Authenticate";
import { NavController } from "ionic-angular";
import { SigninPage } from "../signin/signin";

@Component({
  templateUrl: "tabs.html"
})
export class TabsPage {
  homePage = HomePage;
  settingPage = SettingPage;

  constructor(
    private authService: AuthenticateService,
    private navCtrl: NavController
  ) {}
  onLogout() {
    this.authService.logout();
    this.navCtrl.setRoot(SigninPage);
  }
}
