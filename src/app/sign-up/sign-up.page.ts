import { Component, OnInit } from "@angular/core";
import { NavController, MenuController, ToastController, LoadingController } from "@ionic/angular";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataproviderService } from '../dataprovider.service';

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.page.html",
  styleUrls: ["./sign-up.page.scss"]
})
export class SignUpPage implements OnInit {

  signupform: FormGroup;
  public submitAttempt: boolean = false;

  slideOpts1 = {
    effect: "flip",
    slidesPerView: 1,
    autoplay: true
  };


  constructor(private menu: MenuController,
    public navCtrl: NavController,
    public toastController: ToastController,
    public registrationService: DataproviderService,
    public formBuilder: FormBuilder,
    public loadingController: LoadingController) {
    this.menu.enable(false);
    this.signupform = formBuilder.group({
      username: ['',Validators.compose([Validators.required, Validators.maxLength(10),Validators.minLength(10)])],
      email: ['',Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
      name: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
      confirm_password: ['', Validators.compose([Validators.required])],
      role: ['1'],
    })
  }

  ngOnInit() {

  }

  goToLogin() {
    this.navCtrl.navigateForward("log-in");
  }

  async presentToast(message, duration) {
    const toast = await this.toastController.create({
      message: message,
      duration: duration
    });
    toast.present();
  }

  async register() {
    this.submitAttempt = true;
    console.log(this.signupform.value);
    if (this.signupform.value.email == "" ||
      this.signupform.value.password == "" ||
      this.signupform.value.confirm_password == "" ||
      this.signupform.value.email == "" ||
      this.signupform.value.username == "") {
      this.presentToast('Please enter all details first', 2000);
    } else {
      if (this.signupform.value.password !== this.signupform.value.confirm_password) {
        this.presentToast('Password & confirm password did not match', 2000);
      } else {
        this.submitAttempt = true;
        const loading = await this.loadingController.create({
          message: 'Authenticating..',
          duration: 2700
        });
          await loading.present();
          this.registrationService.createUser(this.signupform.value)
            .subscribe(async (user: any) => {
              console.log(user);
                if (user.id!==null) {
                  this.navCtrl.navigateRoot("log-in");
                } else {
                  this.presentToast("Please try again", 5000);
                }
           
            }, async error => {
              console.log(error.error);
              if(error.error.username){
                this.presentToast("Mobile number already exist", 5000);
              }
              if(error.error.password){
                this.presentToast("Password must contain 8 characters", 5000);
              }
              if(error.error.email){
                this.presentToast("Please enter a valid email address", 5000);
              } 
            })
      }
    }
  }


}


