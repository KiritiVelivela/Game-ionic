import { Component } from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {CorrectPage} from "../correct/correct";


@Component({
  selector: 'page-wrong',
  templateUrl: 'wrong.html',
})
export class WrongPage {

  wrong: string = this.navParams.data;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  console.log(this.wrong);
  }

  ionViewDidEnter() {
    setTimeout(this.tryAgain(), 6000);
  }

  tryAgain() {

      let prompt = this.alertCtrl.create({
        enableBackdropDismiss: false,
        cssClass: 'alertcs',
        title: 'Memory Test',
        message: "Enter the word",
        inputs: [
          {
            name: 'word',
            placeholder: 'word'
          },
        ],
        buttons: [
          {
            text: 'Check',
            handler: data => {
              console.log(data.word);
              if (data.word == this.wrong) {
                this.navCtrl.push(CorrectPage, data)
              }
              else {
                this.navCtrl.push(WrongPage, data); }
            }
          }
        ]
      });
      prompt.present();

  }

}
