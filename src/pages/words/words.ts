import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {WordsProvider} from "../../providers/words/words";
import {CorrectPage} from "../correct/correct";
import {WrongPage} from "../wrong/wrong";
import {UserpagePage} from "../userpage/userpage";



@IonicPage()
@Component({
  selector: 'page-words',
  templateUrl: 'words.html',
})
export class WordsPage {
  all: any;
  words: any;
  len: any;



  constructor(public navParams: NavParams, public navCtrl: NavController, public wordsService: WordsProvider, public alertCtrl: AlertController) {

  }

  ionViewDidEnter(){
    this.showPrompt();
  }

  ionViewDidLoad() {
    this.wordsService.getwords().then((data) => {
      console.log(data);
      if (data.length == '0') {
        stop();
        this.navCtrl.popTo(UserpagePage);
      }
      this.words = Math.floor(Math.random() * data.length);
      console.log(this.words);
      this.all = data[this.words].word;
      data.splice(this.words, 1);
      this.len = data.length;
      console.log(this.all)
    });

  }

  showPrompt() {

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
          handler: dat => {
            console.log(dat.word);
            if (dat.word == this.all ) {
              this.navCtrl.push(CorrectPage, dat)
            }
              else {
                this.navCtrl.push(WrongPage, this.all); }
            }
          }
      ]
    });
    setTimeout(function () {
      prompt.present();
    }, 1000);

  }



}
