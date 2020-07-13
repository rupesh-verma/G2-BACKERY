import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-doctors-profile',
  templateUrl: './doctors-profile.page.html',
  styleUrls: ['./doctors-profile.page.scss'],
})
export class DoctorsProfilePage implements OnInit {
  public navParam: any;
  public serverPath: string = "http://app.quicktreatment4u.com/media/";
  constructor(public navCtrl: NavController, private callNumber: CallNumber,
    private route: ActivatedRoute,
    private router: Router,) { 
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()) {
        this.navParam = this.router.getCurrentNavigation().extras.state.parms;
        console.log(this.navParam)
      }
    });
  }

  ngOnInit() {
  }

  callNow(number) {
    console.log(number);
    this.callNumber
      .callNumber(number, true)
      .then(res => console.log("Launched dialer!", res))
      .catch(err => console.log("Error launching dialer", err));
  }

  goToDoctorsMap() {
    this.navCtrl.navigateForward("tabs/tab2")
  }

  goTochatRoom() {
    this.navCtrl.navigateForward("chat-room")
  }
}
