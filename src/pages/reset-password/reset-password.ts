import { Component } from "@angular/core";
import {
  IonicPage,
  NavParams,
  LoadingController,
  AlertController
} from "ionic-angular";
import { UserService } from "../../services/user";
import { NgForm } from "@angular/forms";

@IonicPage()
@Component({
  selector: "page-reset-password",
  templateUrl: "reset-password.html"
})
export class ResetPasswordPage {
  constructor(
    public navParams: NavParams,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    public userService: UserService
  ) {}

  alertSuccess = this.alertCtrl.create({
    title: "Password Changed",
    subTitle: "Password  changed succesfully.",
    buttons: ["Ok"]
  });
  alertFail = this.alertCtrl.create({
    title: "Password Reset Failed!",
    subTitle: "Password not changed.",
    buttons: ["Ok"]
  });
  loading = this.loadingCtrl.create({
    content: "Changing Password."
  });

  onResetPassword(resetPasswordForm: NgForm) {
    this.userService.currentUser
      .updatePassword(resetPasswordForm.value.password)
      .then(data => {
        this.loading.dismiss();
        this.alertSuccess.present();
      })
      .catch(error => {
        this.loading.dismiss();
        this.alertFail.present();
      });
  }
}
