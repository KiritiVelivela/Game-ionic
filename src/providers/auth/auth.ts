import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthProvider {
  AuthToken;
  isLoggedin: boolean;

  constructor(public http: Http) {
    this.http = http;
    this.isLoggedin = false;
    this.AuthToken = null;
  }

  storeUserCredentials(token) {
    window.localStorage.setItem('raja', token);
    this.useCredentials(token);

  }

  useCredentials(token) {
    this.isLoggedin = true;
    this.AuthToken = token;
  }

  loadUserCredentials() {
    var token = window.localStorage.getItem('raja');
    this.useCredentials(token);
  }

  destroyUserCredentials() {
    this.isLoggedin = false;
    this.AuthToken = null;
    window.localStorage.clear();
  }

  authenticate(user) {
    var creds = "name=" + user.name + "&password=" + user.password;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return new Promise(resolve => {
      this.http.post('https://game-nodejs.appspot.com/authenticate', creds, {headers: headers}).subscribe(data => {
        if(data.json().success){
          this.storeUserCredentials(data.json().token);
          resolve(true);
        }
        else
          resolve(false);
      });
    });
  }
  adduser(user) {
    var creds = "name=" + user.name + "&password=" + user.password;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return new Promise(resolve => {
      this.http.post('https://game-nodejs.appspot.com/adduser', creds, {headers: headers}).subscribe(data => {
        if(data.json().success){
          resolve(true);
        }
        else
          resolve(false);
      });
    });
  }

  getinfo() {
    return new Promise(resolve => {
      var headers = new Headers();
      this.loadUserCredentials();
      console.log(this.AuthToken);
      headers.append('Authorization', 'Bearer ' +this.AuthToken);
      this.http.get('https://game-nodejs.appspot.com/getinfo', {headers: headers}).subscribe(data => {
        if(data.json().success)
          resolve(data.json());
        else
          resolve(false);
      });
    })
  }

  logout() {
    this.destroyUserCredentials();
  }
}
