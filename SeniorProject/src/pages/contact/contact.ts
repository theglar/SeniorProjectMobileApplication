import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

    constructor(public navCtrl: NavController, private alertCtrl: AlertController) {

  }
    signin() {
        let alert = this.alertCtrl.create({
            title: 'Sign In',
            subTitle: 'Successful!',
            buttons: ['Dismiss']
        });
        alert.present();
    }
}
