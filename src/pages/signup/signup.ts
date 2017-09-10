import { Component } from '@angular/core';
import { AlertController, NavController} from 'ionic-angular';
import {AuthProvider} from "../../providers/auth/auth";


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  newcreds = {
    name: '',
    password: ''
  }

  constructor(public navCtrl: NavController, public authservice: AuthProvider, public alertCtrl: AlertController) {


  }

  register(user) {
    this.authservice.adduser(user).then(data => {
      if(data) {
        var alert = this.alertCtrl.create({
          title: 'Success',
          subTitle: 'User Created',
          buttons: ['ok']
        });
        alert.present();
      }
    });
  }

}
