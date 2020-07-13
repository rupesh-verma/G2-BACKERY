import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ToastController, ActionSheetController, Platform, AlertController, NavController } from '@ionic/angular';
// import { DataserviceService } from '../dataservice.service';
import { Storage } from "@ionic/storage";
import { ChangeDetectorRef } from '@angular/core';
import { DataproviderService } from '../dataprovider.service';
// import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';

// import { File, FileEntry } from '@ionic-native/File/ngx';
// import { HttpClient } from '@angular/common/http';
// import { WebView } from '@ionic-native/ionic-webview/ngx';

// import { FilePath } from '@ionic-native/file-path/ngx';

// import { finalize } from 'rxjs/operators';

// const STORAGE_KEY = 'my_images';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  images = [];
  userImage: any;
  userName: any;
  userEmail: any;
  userMobile: any;
  userAddress: any;
  userDOB: any;
  userGender: any;
  userID: any;
  userName1:any;
  userUrl:any;
  userPassword:any;
  userData:any;
  public userDataForm: FormGroup;
  data: any
  constructor(public formBuilder: FormBuilder,
    public navCtrl: NavController,
    public dataService: DataproviderService,
    private storage: Storage, private plt: Platform, private loadingController: LoadingController,
    private ref: ChangeDetectorRef, public alertController: AlertController,
    private actionSheetController: ActionSheetController,
    public toastController: ToastController
  ) { 
   
    this.dataService.getUserData().subscribe((user: any)=>{
      console.log(user);
      this.userData=user;
      this.userName = this.userData.name;
      this.userName1 = this.userData.username;
      this.userAddress = this.userData.address;
      this.userEmail = this.userData.email;
      this.userDOB = this.userData.date_of_birth;
      this.userGender = this.userData.gender;
      this.userImage = this.userData.profile_pic;
      this.userID = this.userData.id;
      this.userUrl = this.userData.url;
      this.userPassword = this.userData.password;
    }), (error: any) => {
            console.log(error);
          }
  }

  ngOnInit() {
    this.userDataForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      name: ['', Validators.compose([Validators.required])],
      date_of_birth: ['', Validators.compose([Validators.required])],
      gender: ['', Validators.compose([Validators.required])],
      username: ['', Validators.compose([Validators.required])],
      address: ['', Validators.compose([Validators.required])],
       id: ['', Validators.compose([Validators.required])],
      url: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
    });
  }

  updateProfile(){
    console.log(this.userDataForm.value)
    this.dataService.updateProfile(this.userDataForm.value)
    .subscribe((data: any) => {
      console.log(data)
      
    }, error => {
      console.log(error);
    })
  }

  goToChangePassword(){
    this.navCtrl.navigateForward("account-settings")
  }
}
