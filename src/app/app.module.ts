import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SettingPage } from '../pages/setting/setting';
import { SigninPage } from '../pages/signin/signin';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { AboutPage } from '../pages/about/about';
import { SignupPage } from '../pages/signup/signup';

import { UserService } from '../services/user';
import { AuthenticateService } from '../services/Authenticate';
import { RedictService } from '../services/redict';
import { ViewDetailsPage } from '../pages/view-details/view-details';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SigninPage,
    TabsPage,
    SettingPage,
    ResetPasswordPage,
    AboutPage,
    SignupPage,
    ViewDetailsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SigninPage,
    TabsPage,
    SettingPage,
    ResetPasswordPage,
    AboutPage,
    SignupPage,
    ViewDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthenticateService,
    RedictService
  ]
})
export class AppModule {}
