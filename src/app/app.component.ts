import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  userDetails: any;
  userName: any;
  public appPages = [

    {
      title: 'Home',
      url: '/tabs',
      icon: 'home',
      color: '#542b1d'
    },
    {
      title: 'Categories',
      url: '#',
      icon: 'apps',
      color: '#542b1d'
    },
    {
      title: 'Products',
      url: '/transactions',
      icon: 'albums',
      color: '#542b1d'
    },
    {
      title: 'WishList',
      url: '#',
      icon: 'bookmarks',
      color: '#542b1d'
    },
    {
      title: 'Orders',
      url: '#',
      icon: 'repeat',
      color: '#542b1d'
    },
    {
      title: 'Account Settings',
      url: '#',
      icon: 'settings',
      color: '#542b1d'
    },
    {
      title: 'My Profile',
      url: '#',
      icon: 'person',
      color: '#542b1d'
    },
    {
      title: 'About Us',
      url: '#',
      icon: 'people',
      color: '#542b1d'
    }
  ];
  constructor(
    private platform: Platform,
    private router: Router,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navCtrl: NavController,
    private storage: Storage
  ) {
    this.initializeApp();
  }

  // initializeApp() {
  //   this.platform.ready().then(() => {
  //     this.storage.get("userlogindata").then(val => {
  //       if (val != null) {
  //         console.log(val);
  //         this.router.navigateByUrl("tabs");
  //       } else {
  //         this.router.navigateByUrl("app-landing");
  //         console.log(val);
  //       }
  //     });
  //     this.statusBar.styleDefault();
  //     this.splashScreen.hide();
  //   });
  // }




  initializeApp() {
    this.platform.ready().then(() => {
      if (!this.isLogin()) {
        console.log('val1');
        // this.navCtrl.navigateRoot("log-in");
        this.navCtrl.navigateRoot('app-landing');
      } else {
        this.storage.get('token').then((val) => {
          console.log(val);
        });
        this.navCtrl.navigateRoot('tabs');
      }
      this.statusBar.backgroundColorByHexString('#542b1d');
      this.splashScreen.hide();
    });
  }

  // ngOnInit(): any {
  //   if (!this.isLogin()) {
  //     this.navCtrl.navigateRoot("app-landing");
  //   }
  //   else {
  //     this.storage.get('token').then((val) => {
  //       console.log(val)
  //     });
  //     this.navCtrl.navigateRoot("tabs");
  //   }
  // }

  isLogin() {
    // this.storage.get('token').then((val) => {
    //   console.log(val)
    // });
    return localStorage.getItem('token') != null;
  }

  logout() {
    localStorage.removeItem('token');
    this.storage.clear().then(() => {
      console.log('all keys cleared');
      this.navCtrl.navigateRoot('app-landing');
    });
  }
}
