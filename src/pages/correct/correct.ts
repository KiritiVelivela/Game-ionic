import {Component } from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {WordsPage} from "../words/words";



@Component({
  selector: 'page-correct',
  templateUrl: 'correct.html',
})
export class CorrectPage  {

  correct: string =  this.navParams.get('word');


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    console.log(this.correct);
  }

  ionViewWillEnter() {
    this.moveOn();
  }


  moveOn(){
      let alert = this.alertCtrl.create({
        title: 'Memory Game',
        subTitle: 'Get ready for the next word...!!',
        buttons: [
          {
            text: 'Lets Go!',
            handler: data => {
              this.navCtrl.push(WordsPage, this.correct);
            }
          }
        ]
      });
      setTimeout(function () {
        alert.present();
      }, 2000);
  }

}
