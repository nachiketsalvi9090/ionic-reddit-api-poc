import { Component } from "@angular/core";
import {
  NavController,
  NavParams,
  LoadingController,
  AlertController
} from "ionic-angular";
import { User } from "../../data/user";
import { NgForm } from "@angular/forms";
import { UserService } from "../../services/user";
import { AuthenticateService } from "../../services/Authenticate";
@Component({
  selector: "page-signup",
  templateUrl: "signup.html"
})
export class SignupPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private authService: AuthenticateService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    public userService: UserService
  ) {}
  user: User = {
    email: "",
    password: ""
  };
  signUpLoading = this.loadingCtrl.create({
    content: "Wait Signing up..."
  });
  registrationDoneAlert = this.alertCtrl.create({
    title: "Registration Done",
    message: "User Registration Done.Now you can login.",
    buttons: ["Ok"]
  });
  passwordNotMatchAlert = this.alertCtrl.create({
    title: "Password Not Match",
    buttons: ["Ok"]
  });
  registrationFailedAlert = this.alertCtrl.create({
    title: "Signup failed!",
    buttons: ["Ok"]
  });
  onSignUp(signUpForm: NgForm) {
    this.user.email = signUpForm.value.email;
    this.user.password = signUpForm.value.password;
    const cPassword = signUpForm.value.cPassword;
     
    this.signUpLoading.present();
    this.authService
      .signup(this.user)
      .then(data => {
        this.signUpLoading.dismiss();

        this.registrationDoneAlert.present();
      })
      .catch(error => {
        this.signUpLoading.dismiss();
        this.registrationFailedAlert.setMessage(error.message);
        this.registrationFailedAlert.present();
      });
  }
}
