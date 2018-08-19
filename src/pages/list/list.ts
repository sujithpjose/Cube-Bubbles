import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';

import { Page } from '../../model/page';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage extends Page {
  selectedItem: any;
  icons: string[];
  items: Array<{ title: string, note: string, icon: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams,  nativePageTransitions: NativePageTransitions) {
    // Call superclass constructor
    super(nativePageTransitions);
    console.log(nativePageTransitions);
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
      'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  ionViewWillEnter() {
    // Entering/resume view transition animation
    this.animateTransition();
  }

  itemTapped(event, item) {
    /* const animationsOptions = {
      animation: 'ios-transition',
      duration: 1000
    } */

    // this.navCtrl.push(AboutPage, {}, animationsOptions);
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    }, { animate: false });
  }
}
