
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
//import { Device } from '@ionic-native/device/ngx';
import { AlertController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.page.html',
  styleUrls: ['./chat-room.page.scss'],
})
export class ChatRoomPage implements OnInit {

  conversation = [
    { text: 'Hey, that\'s an awesome chat UI', sender: 0, image: '../assets/img/doctor1.png' },
    { text: 'Right, it totally blew my mind', sender: 1, image: '../assets/img/user.jpg', read: true, delivered: true, sent: true },
    { text: 'And it is free ?', sender: 0, image: '../assets/img/doctor1.png' },
    { text: 'Yes, totally free', sender: 1, image: '../assets/img/user.jpg', read: true, delivered: true, sent: true },
    { text: 'Wow, that\'s so cool', sender: 0, image: '../assets/img/doctor1.png' },
    { text: 'Hats off to the developers', sender: 1, image: '../assets/img/user.jpg', read: true, delivered: true, sent: true },
    { text: 'Oh yes, this is gooood stuff', sender: 0, image: '../assets/img/doctor1.png' },
    { text: 'Check out their other designs ', sender: 1, image: '../assets/img/user.jpg', read: false, delivered: false, sent: true }

  ]
  //phone_model = 'iPhone';
  input = '';

  constructor(private platform: Platform,
    public alertController: AlertController,
    //private device: Device,
    private menuCtrl: MenuController) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(false, 'end');
    this.menuCtrl.enable(true, 'start');

    setTimeout(() => {
      this.scrollToBottom()
    }, 10)
    // setTimeout(() => {
    //   //this.presentAlert();
    // }, 100)


  }
  goToBookAppointment(){
    
  }

  // async presentAlert() {
  //   if (this.device.platform = 'iOS') {
  //     switch (this.platform.height()) {
  //       case 812:
  //         this.phone_model = 'iPhone X';
  //         break;
  //       case 736:
  //         this.phone_model = 'iPhone 6/7/8 Plus';
  //         break;
  //       case 667:
  //         this.phone_model = 'iPhone 6/7/8';
  //         break;
  //     }

  //     const alert = await this.alertController.create({
  //       header: 'Hey there',
  //       subHeader: 'Information',
  //       message: 'We have adjusted the layout as per the phone model - ' + this.phone_model,
  //       buttons: ['OK']
  //     });

  //     await alert.present();
  //   }
  // }

  send() {
    if (this.input != '') {
      this.conversation.push({ text: this.input, sender: 1, image: '../assets/img/user.jpg' });
      this.input = '';
      setTimeout(() => {
        this.scrollToBottom()
      }, 10)
    }
  }

  scrollToBottom() {
    let content = document.getElementById("chat-container");
    let parent = document.getElementById("chat-parent");
    let scrollOptions = {
      left: 0,
      top: content.offsetHeight
    }

    parent.scrollTo(scrollOptions)
  }
}
