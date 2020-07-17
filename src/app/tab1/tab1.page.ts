import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataproviderService } from '../dataprovider.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NavigationExtras, Router  } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  public serverPath = 'http://app.quicktreatment4u.com/media/';
  public coordinates: any ;
  public doctorData: any;
  slideOpt = {
    loop: true,
    autoplay: true,
    
  };

  constructor(public navCtrl: NavController,
              public geolocation: Geolocation,
              public dataService: DataproviderService,
              public router: Router) {
        this.geolocation.getCurrentPosition().then((resp) => {
          this.coordinates = resp.coords;
          console.log(this.coordinates.latitude);
          const cord = {
            latitude : this.coordinates.latitude,
            longitude : this.coordinates.longitude
          };
          console.log(cord);
          this.dataService.nearByDocs(cord)
          .subscribe((data: any) => {

            this.doctorData = data;
            console.log(this.doctorData);
          }, error => {
            console.log(error);
          });
        }).catch((error) => {
          // alert('Error getting location' + JSON.stringify(error));
        });
   }

  goToDoctorsprofile(i) {
    console.log(i);
    const navigationExtras: NavigationExtras = {
      state: {
        user: 'name',
        parms: this.doctorData[i]
      }
    };
    this.navCtrl.navigateForward('doctors-profile', navigationExtras);
  }

  goToConsultNow() {
    this.navCtrl.navigateForward('chat-room');
  }

  goToBookAppointment(i) {
    // console.log(i)
    const navigationExtras: NavigationExtras = {
      state: {
        user: 'name',
        parms: this.doctorData[i].id
      }
    };
    this.navCtrl.navigateRoot('appointments', navigationExtras);
  }
  slidesDidLoad(slider) {

  }
  product() {
    this.router.navigateByUrl('/transactions');
  }
}
