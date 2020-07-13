import { Component, OnInit } from '@angular/core';
import { NavController, MenuController, ToastController, LoadingController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataproviderService } from '../dataprovider.service';
import { NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss']
})
export class LogInPage implements OnInit {
  public submitAttempt = false;
  userlogin: FormGroup;

  slideOpts1 = {
    effect: 'flip',
    slidesPerView: 1,
    autoplay: true
  };
  constructor(
    public storage: Storage,
    private menu: MenuController,
    public navCtrl: NavController,
    public toastController: ToastController,
    public loginService: DataproviderService,
    public formBuilder: FormBuilder,
    public loadingController: LoadingController) {
    this.menu.enable(false);
    this.userlogin = formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {

  }


  goToLogin() {
    this.navCtrl.navigateForward('sign-up');
  }


  //  login() {
  //    console.log(this.userlogin.value);
  //    this.navCtrl.navigateForward('tabs/tab1');
  //    this.submitAttempt = true;
  //  }

  login() {
    // this.navCtrl.navigateForward('tab/tab1');
    this.submitAttempt = true;
    console.log(this.userlogin.value);
    if (
      this.userlogin.value.username === '' ||
      this.userlogin.value.password === '' ||
      this.userlogin.value.username === '' && this.userlogin.value.password === '') {
      this.presentToast('Please enter login details first!', 2000);
    } else {
      this.loadingController.create({
        message: 'Authenticating..',
        duration: 2000
      }).then((res) => {
        res.present();
        this.userlogin.value.grant_type = 'password';
        this.loginService.loginUser(this.userlogin.value)
          .subscribe((user: any) => {
            console.log(user);
            this.storage.set('token', JSON.stringify(user));
            localStorage.setItem('token', JSON.stringify(user));
            // tslint:disable-next-line: prefer-const
            var user = JSON.parse(localStorage.getItem('token'));
            console.log((user));
            console.log(typeof(user));
            this.storage.get('token').then((val) => {
              console.log(val);
              // this.userID= val.role;
              // console.log('user data',  this.userID);
            });
            console.log(this.storage.keys());
            const navigationExtras: NavigationExtras = {
                  state: {
                    user: 'name',
                    parms: user
                  }
                };
            this.navCtrl.navigateRoot('tabs', navigationExtras);
            this.presentToast('login success', 2000);

          }, error => {
            console.log(error);

            this.presentToast(error.message, 3000);
          });
      });
    }
  }

  async presentToast(message, duration) {
    const toast = await this.toastController.create({
      message,
      duration
    });
    toast.present();
  }
}
