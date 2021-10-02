import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  google;
  facebook;
  twitter;

  constructor(private loginService: LoginService) {}

  onLoginGoogle(){
    console.log('google');
    this.loginService.googleLogin();

  }
  onLoginFacebook(){
    console.log('facebook');
    this.loginService.facebookLogin();
  }
  onLoginTwitter(){
    console.log('twitter');
  }
  onLogOut(value){
    console.log(value);
  }



}
