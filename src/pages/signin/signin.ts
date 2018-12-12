import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController,
  AlertController
} from "ionic-angular";
import { FormControl } from "@angular/forms";
import { TabsPage } from "../tabs/tabs";
import { SignupPage } from "../signup/signup";
import { AuthenticateService } from "../../services/Authenticate";
import { UserService } from "../../services/user";
import { User } from "../../data/user";
import firebase from "firebase";
@IonicPage()
@Component({
  selector: "page-signin",
  templateUrl: "signin.html"
})
export class SigninPage {
  user: User = {
    email: "",
    password: ""
  };
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private authService: AuthenticateService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    public userService: UserService
  ) {}

  signInFailAlert = this.alertCtrl.create({
    title: "Signin failed!",
    subTitle: "Invalid Username or Password",
    buttons: ["Ok"]
  });
  signInLoading = this.loadingCtrl.create({
    content: "Checking Login Details."
  });
  onSingIn(signInForm: FormControl) {
    this.user.email = signInForm.value.email;
    this.user.password = signInForm.value.password;

    this.signInLoading.present();
    this.authService
      .signin(this.user)
      .then(data => {
        this.signInLoading.dismiss();
        this.userService.setCurrentUser(firebase.auth().currentUser);
        this.navCtrl.push(TabsPage);
      })
      .catch(error => {
        this.signInLoading.dismiss();
        this.signInFailAlert.present();
      });
  }
  onClickSiignUp() {
    this.navCtrl.push(SignupPage);
  }
}
