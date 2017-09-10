import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthProvider } from '../providers/auth/auth';
import {SignupPage} from "../pages/signup/signup";
import {UserpagePage} from "../pages/userpage/userpage";
import {HttpModule} from "@angular/http";
import {WordsPage} from "../pages/words/words";
import { WordsProvider } from '../providers/words/words';
import {CorrectPage} from "../pages/correct/correct";
import {WrongPage} from "../pages/wrong/wrong";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage,
    UserpagePage,
    WordsPage,
    CorrectPage,
    WrongPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignupPage,
    UserpagePage,
    WordsPage,
    CorrectPage,
    WrongPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    WordsProvider
  ]
})
export class AppModule {}
