import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-pharmacy-description',
  templateUrl: './pharmacy-description.page.html',
  styleUrls: ['./pharmacy-description.page.scss'],
})
export class PharmacyDescriptionPage implements OnInit {
  public navParam: any;
  public serverPath = 'http://app.quicktreatment4u.com/media/';
  constructor(public navCtrl: NavController, private callNumber: CallNumber, private route: ActivatedRoute,
              private router: Router) {
      this.route.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation()) {
          this.navParam = this.router.getCurrentNavigation().extras.state.parms;
          console.log(this.navParam);
        }
      });
     }

  ngOnInit() {
  }

  callNow(number) {
    console.log(number);
    this.callNumber
      .callNumber(number, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

  goToPharmacymap() {
    this.navCtrl.navigateForward('pharmacy/pharmacymap');
  }

  goTochatRoom() {
    this.navCtrl.navigateForward('chat-room');
  }
  goToPharmacyDescription() {
  }
  goToConsultNow() {
  }
}
