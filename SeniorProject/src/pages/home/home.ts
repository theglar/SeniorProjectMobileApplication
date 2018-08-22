import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController, private alertCtrl: AlertController) {

  }
  
  onLink(url: string) {
      window.open(url);
  }

    connectBluetooth() {
        let alert = this.alertCtrl.create({
            title: 'Bluetooth',
            subTitle: 'Connecting to Bluetooth!',
            buttons: ['Dismiss']
        });
        alert.present();
    }

}
