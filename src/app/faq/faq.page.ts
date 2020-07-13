import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {

  ngOnInit() { }



  Provided = [
    {
      name: "information-circle",
      label: "How can i use this app Quicktreatment4u?",
      description: "You can see nearby doctors in a list amd map view and consult them to cure your desease, they can give you prescription which can be delivered to you by nearby pharmacist"
    },
    {
      name: "information-circle",
      label: "How can i use this app Quicktreatment4u?",
      description: "You can see nearby doctors in a list amd map view and consult them to cure your desease, they can give you prescription which can be delivered to you by nearby pharmacist"
    },
    {
      name: "information-circle",
      label: "How can i use this app Quicktreatment4u?",
      description: "You can see nearby doctors in a list amd map view and consult them to cure your desease, they can give you prescription which can be delivered to you by nearby pharmacist"
    },
    {
      name: "information-circle",
      label: "How can i use this app Quicktreatment4u?",
      description: "You can see nearby doctors in a list amd map view and consult them to cure your desease, they can give you prescription which can be delivered to you by nearby pharmacist"
    }
  ];




  shownGroup1 = null;

  constructor() { }



  toggleGroup1(group1) {
    if (this.isGroupShown1(group1)) {
      this.shownGroup1 = null;
    } else {
      this.shownGroup1 = group1;
    }
  }

  isGroupShown1(group1) {
    return this.shownGroup1 === group1;
  }



}
