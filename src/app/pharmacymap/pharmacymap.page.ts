import { Component, ViewChild, OnInit } from '@angular/core';
import { ToastController, Platform, NavController } from '@ionic/angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  LatLng,
  MarkerOptions,
  GoogleMapsAnimation,
  MyLocation
} from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-pharmacymap',
  templateUrl: './pharmacymap.page.html',
  styleUrls: ['./pharmacymap.page.scss'],
})
export class PharmacymapPage implements OnInit {
  //@ViewChild('map', { static: false }) element;
  geoLatitude: number;
  geoLongitude: number;

  constructor(
    public googleMaps: GoogleMaps,
    public plt: Platform,
    public toastCtrl: ToastController,
    private geolocation: Geolocation,
    public nav: NavController,
    private http: HTTP) {
  }
  ngAfterViewInit() {
    this.plt.ready().then(() => {
      this.http.get('https://oghuxxw1e6.execute-api.us-east-1.amazonaws.com/dev', {}, {})
        .then(restaurants => {
          console.log(restaurants)
          let restaurant1 = JSON.parse(restaurants.data)
          this.initMap(restaurant1)
        })
        .catch(error => {
          console.log(error.status);
          console.log(error.error);   // error message as string
          console.log(error.headers);
        });
    });
  }

  initMap(restaurants) {
    let map: GoogleMap = this.googleMaps.create('map');
    map.one(GoogleMapsEvent.MAP_READY).then((data: any) => {
      let cameraCoordinates: LatLng = new LatLng(restaurants[0].position.lat, restaurants[0].position.lgn);
      let cameraPosition = {
        target: cameraCoordinates,
        zoom: 17
      };

      map.animateCamera(cameraPosition);
      restaurants.forEach((restaurant) => {
        let coordinates: LatLng = new LatLng(restaurant.position.lat, restaurant.position.lgn);

        let markerOptions: MarkerOptions = {
          position: coordinates,
          icon: "assets/img/user.png",
          title: restaurant.title,
          infoClick: () => {
            console.log("infoClick")
            this.nav.navigateForward("pharmacy-description");
          }
        };
        const marker = map.addMarker(markerOptions)
          .then((marker: Marker) => {
            marker.showInfoWindow();
          });
      });
    })
  }










  map: GoogleMap;

  ngOnInit() {
    // Since ngOnInit() is executed before `deviceready` event,
    // you have to wait the event.
    //this.platform.ready();
    //this.loadMap();

  }

  // loadMap() {
  //   this.map = GoogleMaps.create('map', {
  //     camera: {
  //       target: {
  //         lat: 43.0741704,
  //         lng: -89.3809802
  //       },
  //       zoom: 18,
  //       tilt: 30
  //     }
  //   });
  //   this.goToMyLocation();
  // }


  goToMyLocation() {
    this.map.clear();

    // Get the location of you
    this.map.getMyLocation().then((location: MyLocation) => {
      console.log(JSON.stringify(location, null, 2));

      // Move the map camera to the location with animation
      // this.map.animateCamera({
      //   target: location.latLng,
      //   zoom: 17,
      //   duration: 5000
      // });

      //add a marker
      let marker: Marker = this.map.addMarkerSync({
        title: '@ionic-native/google-maps plugin!',
        snippet: 'This plugin is awesome!',
        position: location.latLng,
        animation: GoogleMapsAnimation.BOUNCE
      });

      //show the infoWindow
      marker.showInfoWindow();

      //If clicked it, display the alert
      marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
        this.showToast('clicked!');
      });

      this.map.on(GoogleMapsEvent.MAP_READY).subscribe(
        (data) => {
          console.log("Click MAP", data);
        }
      );
    })
      .catch(err => {
        //this.loading.dismiss();
        this.showToast(err.error_message);
      });
  }

  async showToast(message: string) {
    let toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

}
