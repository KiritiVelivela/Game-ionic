import { Component } from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {CorrectPage} from "../correct/correct";


@Component({
  selector: 'page-wrong',
  templateUrl: 'wrong.html',
})
export class WrongPage {
  public edited = true;
  wrong: string = this.navParams.data;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  console.log(this.wrong);
  }

  ionViewDidEnter() {
    this.tryAgain();
    this.saveTodos();
  }

  saveTodos(): void {
    //show box msg
    this.edited = false;
    //wait 3 Seconds and hide
    setTimeout(function() {
      this.edited = true;
      console.log(this.edited);
    }.bind(this), 2000);
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
                this.navCtrl.push(WrongPage, this.wrong); }
            }
          }
        ]
      });
      setTimeout(function () {
        prompt.present();
      }, 3000);

  }

}
