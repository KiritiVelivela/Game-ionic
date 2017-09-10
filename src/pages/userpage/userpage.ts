import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
;
import {AuthProvider} from "../../providers/auth/auth";
import {HomePage} from "../home/home";
import {WordsPage} from "../words/words";

@Component({
  selector: 'page-userpage',
  templateUrl: 'userpage.html',
})
export class UserpagePage {

  constructor(public navCtrl: NavController, public authservice: AuthProvider, public alertCtrl: AlertController) {
  }

  logout() {
    this.authservice.logout();
    this.navCtrl.setRoot(HomePage);
  }

  getinfo() {
    this.authservice.getinfo().then((data: any) => {
      if(data.success) {
        var alert = this.alertCtrl.create({
          title: data.success,
          subTitle: data.msg,
          buttons: ['ok']
        });
        alert.present();
      }

    })

  }

  game(){
    this.navCtrl.push(WordsPage);
  }

}
