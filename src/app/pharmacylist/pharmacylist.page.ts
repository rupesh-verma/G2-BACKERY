import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { DataproviderService } from '../dataprovider.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-pharmacylist',
  templateUrl: './pharmacylist.page.html',
  styleUrls: ['./pharmacylist.page.scss'],
})
export class PharmacylistPage implements OnInit {
  public serverPath: string = "http://app.quicktreatment4u.com/media/";
  public coordinates :any ;
  public pharmacyData :any;
  constructor( public geolocation: Geolocation, public alertController: AlertController, public navCtrl: NavController, private callNumber: CallNumber,public dataService: DataproviderService) {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.coordinates = resp.coords;
      console.log(this.coordinates.latitude);
      let cord = {
        latitude : this.coordinates.latitude,
        longitude : this.coordinates.longitude
      }
      console.log(cord)
      this.dataService.nearByPharmacy(cord)
      .subscribe((data: any) => {
        console.log(data)
        this.pharmacyData = data;
      }, error => {
        console.log(error);
      })
    }).catch((error) => {
      alert('Error getting location' + JSON.stringify(error));
    });
   }

  async presentAlert(i) {
    const alert = await this.alertController.create({
      header: this.pharmacyData[i].name,
      subHeader: this.pharmacyData[i].address,
      message: 'Contact no.- '+this.pharmacyData[i].contact_no,
      buttons: ['OK']
    });
    await alert.present();
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

  goToPharmacyDescription(i) {
    console.log(i)
    let navigationExtras: NavigationExtras = {
      state: {
        user: 'name',
        parms: this.pharmacyData[i]
      }
    };
    this.navCtrl.navigateForward("pharmacy-description",navigationExtras)
  }

}
