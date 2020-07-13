import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-app-landing',
  templateUrl: './app-landing.page.html',
  styleUrls: ['./app-landing.page.scss']
})
export class AppLandingPage implements OnInit {
  constructor(public navCtrl: NavController) { }

  ngOnInit() { }
  goToTerms() {
    this.navCtrl.navigateForward('terms-services');
  }

  goToPrivacy() {
    this.navCtrl.navigateForward('privacy-policy');
  }

  goToLogin() {
    this.navCtrl.navigateForward('log-in');
  }

  goToRegister() {
    this.navCtrl.navigateForward('sign-up');
  }
}
