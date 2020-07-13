import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  HtmlInfoWindow,
  GeocoderResult,
  GoogleMapsAnimation,
  MyLocation,
} from '@ionic-native/google-maps';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoderResult, NativeGeocoder, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { Geocoder, BaseArrayClass } from '@ionic-native/google-maps';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  geoLatitude: number;
  geoLongitude: number;
  geoAccuracy: number;
  geoAddress: string;
  markerlatlong: any;
  watchLocationUpdates: any;
  loading: any;
  isWatching: boolean;
  // Geocoder configuration
  geoencoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };
  map: GoogleMap;
  constructor(private platform: Platform,
              private geolocation: Geolocation,
              private nativeGeocoder: NativeGeocoder) { }

  async ngOnInit() {
    await this.platform.ready();
    await this.loadmap();
    this.getFrameMarker();
  }

  getFrameMarker() {
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      console.log('Map is ready!');
      const htmlInfoWindow = new HtmlInfoWindow();
      const frame: HTMLElement = document.createElement('div');
      frame.innerHTML = ['<img src="assets/img/user.png">'].join('');
      frame.getElementsByTagName('img')[0].addEventListener('click', () => {
        htmlInfoWindow.setBackgroundColor('red');
      });
      htmlInfoWindow.setContent(frame, { width: '40px', height: '40px' });

      const marker: Marker = this.map.addMarkerSync({
        title: 'doctor',
        icon: 'blue',
        zoom: 17,
        animation: 'DROP',
        draggable: true,
        position: {
          lat: this.geoLatitude,
          lng: this.geoLongitude
        }
      });

      marker.showInfoWindow();
      marker.addEventListener(GoogleMapsEvent.MARKER_CLICK).subscribe(data => {
        htmlInfoWindow.open(marker);
        console.log(data);
      });


      // marker.on(GoogleMapsEvent.MARKER_DRAG_END).subscribe(() => {
      // this.markerlatlong = marker.getPosition();
      // localStorage.setItem("latt1", this.markerlatlong.lat);
      // localStorage.setItem("long1", this.markerlatlong.lng);
      // this.http.get('API URL').map(res => res.json()).subscribe(data => {
      //   console.log(data);
      // });
      // });
    });
  }

  loadmap() {
    this.map = GoogleMaps.create('map_canvas');
    const marker: Marker = this.map.addMarkerSync({
      title: 'A',
      icon: 'blue',
      animation: 'DROP',
      zoom: 16,
      position: {
        lat: 22.7593653,
        lng: 75.90482349999999
      }
    });
    marker.addEventListener(GoogleMapsEvent.MAP_CLICK).subscribe(() => {
      alert('Marker' + marker.getTitle() + 'is clicked');
      console.log('Marker' + marker.getTitle() + 'is clicked');
    });
    marker.showInfoWindow();
  }


  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



  // Get current coordinates of device
  getGeolocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.geoLatitude = resp.coords.latitude;
      this.geoLongitude = resp.coords.longitude;
      this.geoAccuracy = resp.coords.accuracy;
      this.getGeoencoder(this.geoLatitude, this.geoLongitude);
    }).catch((error) => {
      alert('Error getting location' + JSON.stringify(error));
    });
  }

  // geocoder method to fetch address from coordinates passed as arguments
  getGeoencoder(latitude, longitude) {
    this.nativeGeocoder.reverseGeocode(latitude, longitude, this.geoencoderOptions)
      .then((result: NativeGeocoderResult[]) => {
        this.geoAddress = this.generateAddress(result[0]);
      })
      .catch((error: any) => {
        alert('Error getting location' + JSON.stringify(error));
      });
  }

  // Return Comma saperated address
  generateAddress(addressObj) {
    const obj = [];
    let address = '';
    // tslint:disable-next-line: forin
    for (const key in addressObj) {
      obj.push(addressObj[key]);
    }
    obj.reverse();
    for (const val in obj) {
      if (obj[val].length) {
        address += obj[val] + ', ';
      }
    }
    return address.slice(0, -2);
  }


  // Start location update watch
  watchLocation() {
    this.isWatching = true;
    this.watchLocationUpdates = this.geolocation.watchPosition();
    this.watchLocationUpdates.subscribe((resp) => {
      this.geoLatitude = resp.coords.latitude;
      this.geoLongitude = resp.coords.longitude;
      this.getGeoencoder(this.geoLatitude, this.geoLongitude);
    });
  }

  // Stop location update watch
  stopLocationWatch() {
    this.isWatching = false;
    this.watchLocationUpdates.unsubscribe();
  }
}
