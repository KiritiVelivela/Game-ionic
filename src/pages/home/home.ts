import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {AuthProvider} from "../../providers/auth/auth";
import {UserpagePage} from '../userpage/userpage';
import {SignupPage} from '../signup/signup';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usercreds = {
    name: '',
    password: ''
  }

  constructor(public navCtrl: NavController, public authservice: AuthProvider) {

  }

  login(user) {
    this.authservice.authenticate(user).then(data => {
      if(data) {
        this.navCtrl.setRoot(UserpagePage);
      }
    });
  }
  signup() {
    this.navCtrl.push(SignupPage);
  }

}
