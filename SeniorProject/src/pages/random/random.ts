import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-random',
  templateUrl: 'random.html'
})
export class RandomPage {

  constructor(public navCtrl: NavController) {

  }
  
  onLink(url: string) {
      window.open(url);
  }
}
