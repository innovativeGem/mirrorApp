import { Component, OnInit } from '@angular/core';
import { Platform } from 'ionic-angular';

import { Brightness } from '@ionic-native/brightness/ngx';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

})
export class HomePage implements OnInit {

  screenWidth: number;
  screenHeight: number;
  brightnessVal: number;

  constructor(
    private platform: Platform,
    private brightness: Brightness
    ) {}

  ngOnInit() {
    this.platform.ready().then(() => {
      this.screenWidth = window.outerWidth;
      this.screenHeight = window.outerHeight;
    });
    /*
    this.platform.ready().then(() => {
      console.log(this.platform.width());
      this.getWidth();
    });
    */
  }

  getFrameColor() {
    const el = <HTMLElement>document.querySelector('.first-frame');
    const newColor = "#" + Math.floor(100000 + Math.random() * 900000).toString();
    el.style.borderColor = newColor;
  }

  handleBrightnessChange(event) {
    this.brightnessVal = event.details.value;
    console.log(this.brightnessVal);
    this.brightness.setBrightness(this.brightnessVal);
  }
}
