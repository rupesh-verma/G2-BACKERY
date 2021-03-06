import { CalendarComponent } from 'ionic2-calendar/calendar';
import { Component, ViewChild, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { DataproviderService } from '../dataprovider.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.page.html',
  styleUrls: ['./appointments.page.scss'],
})
export class AppointmentsPage implements OnInit {
  navParam:any;
  timeslot:any;
  slotSubject:any;
  slideOpts1 = {
    effect: "flip",
    slidesPerView: 1,
    //autoplay: true
  };

  event = {
    title: '',
    desc: '',
    startTime: '',
    endTime: '',
    //allDay: false
  };

  minDate = new Date().toISOString();

  eventSource = [];
  viewTitle;

  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };
  @ViewChild(CalendarComponent, { static: false }) myCal: CalendarComponent
  //@ViewChild(CalendarComponent) myCal: CalendarComponent;

  constructor( public dataService: DataproviderService, private alertCtrl: AlertController, @Inject(LOCALE_ID) private locale: string,
  private route: ActivatedRoute,
  private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()) {
        this.navParam = this.router.getCurrentNavigation().extras.state.parms;
        console.log(this.navParam)
      }
    });
   }

  ngOnInit() {
    this.resetEvent();
  }

  resetEvent() {
    this.event = {
      title: '',
      desc: '',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
      //allDay: false
    };
  }

  // Create the right event format and reload source
  addEvent() {
    console.log(this.event)
    let eventCopy = {
      title: this.event.title,
      startTime: new Date(this.event.startTime),
      endTime: new Date(this.event.endTime),
      //allDay: this.event.allDay,
      desc: this.event.desc
    }

    if (eventCopy) {
      let start = eventCopy.startTime;
      let end = eventCopy.endTime;
      eventCopy.startTime = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
      eventCopy.endTime = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate() + 1));
    }


    this.eventSource.push(eventCopy);
    this.myCal.loadEvents();
    this.resetEvent();
  }



  // Change current month/week/day
  next() {
    var swiper = document.querySelector('.swiper-container')['swiper'];
    swiper.slideNext();
  }

  back() {
    var swiper = document.querySelector('.swiper-container')['swiper'];
    swiper.slidePrev();
  }

  // Change between month/week/day
  changeMode(mode) {
    this.calendar.mode = mode;
  }

  // Focus today
  today() {
    this.calendar.currentDate = new Date();
  }

  // Selected date reange and hence title changed
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  // Calendar event was clicked
  async onEventSelected(event) {
    // Use Angular date pipe for conversion
    let start = formatDate(event.startTime, 'medium', this.locale);
    let end = formatDate(event.endTime, 'medium', this.locale);

    const alert = await this.alertCtrl.create({
      header: event.title,
      subHeader: event.desc,
      message: 'From: ' + start + '<br><br>To: ' + end,
      buttons: ['OK']
    });
    alert.present();
  }

  // Time slot was clicked
  onTimeSelected(ev) {
    let selected = new Date(ev.selectedTime);
    this.event.startTime = selected.toISOString();
    selected.setHours(selected.getHours() + 1);
    this.event.endTime = (selected.toISOString());
  }



  onChangeTime(ev) {
    let appointDate = (ev).split("T", 2)[0];
    //console.log((appointDate).getDay())
    let form ={
      date: appointDate,
      id:  this.navParam
    }
    this.dataService.getApptTime(form)
          .subscribe((data: any) => {
            this.timeslot = data.time_slot;
            this.slotSubject = data.type_subject;

            console.log(this.slotSubject);
          }, error => {
            console.log(error);
          })
  }
}
