import {Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {WordsPage} from "../words/words";


@IonicPage()
@Component({
  selector: 'page-correct',
  templateUrl: 'correct.html',
})
export class CorrectPage  {

  correct: string =  this.navParams.get('word');


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.correct);
  }

ionViewDidEnter() {
    setTimeout( this.moveOn(), 6000);
}

moveOn(){
    this.navCtrl.push(WordsPage, this.correct);
}

}
