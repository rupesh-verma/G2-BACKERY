import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {

  public data = [
    {
      id: '2',
      customer_id: '2',
      booking_id: 'XLIVASG0U',
      car_id: '1',
      ref_txn_id: '145321',
      transaction_status: 'SUCCESS',
      payment_mode: 'CREDIT_CARD',
      amount: '510.00',
      pickup_location: 'Vijay Nagar, Indore, Madhya Pradesh, India',
      drop_location: null,
      pickup_date: '19-08-2019 15:21',
      dropoff_date: '20-08-2019 15:21',
      status: 'Completed',
      created: '2019-08-19 15:25:06',
      name: 'BMW X1',
      first_name: 'jay'
    },
    {
      id: '2',
      customer_id: '2',
      booking_id: 'XLIVASG0U',
      car_id: '1',
      ref_txn_id: '145321',
      transaction_status: 'SUCCESS',
      payment_mode: 'CREDIT_CARD',
      amount: '510.00',
      pickup_location: 'Vijay Nagar, Indore, Madhya Pradesh, India',
      drop_location: null,
      pickup_date: '19-08-2019 15:21',
      dropoff_date: '20-08-2019 15:21',
      status: 'Completed',
      created: '2019-08-19 15:25:06',
      name: 'BMW X1',
      first_name: 'jay'
    },
    {
      id: '2',
      customer_id: '2',
      booking_id: 'XLIVASG0U',
      car_id: '1',
      ref_txn_id: '145321',
      transaction_status: 'SUCCESS',
      payment_mode: 'CREDIT_CARD',
      amount: '510.00',
      pickup_location: 'Vijay Nagar, Indore, Madhya Pradesh, India',
      drop_location: null,
      pickup_date: '19-08-2019 15:21',
      dropoff_date: '20-08-2019 15:21',
      status: 'Completed',
      created: '2019-08-19 15:25:06',
      name: 'BMW X1',
      first_name: 'jay'
    },
    {
      id: '2',
      customer_id: '2',
      booking_id: 'XLIVASG0U',
      car_id: '1',
      ref_txn_id: '145321',
      transaction_status: 'SUCCESS',
      payment_mode: 'CREDIT_CARD',
      amount: '510.00',
      pickup_location: 'Vijay Nagar, Indore, Madhya Pradesh, India',
      drop_location: null,
      pickup_date: '19-08-2019 15:21',
      dropoff_date: '20-08-2019 15:21',
      status: 'Completed',
      created: '2019-08-19 15:25:06',
      name: 'BMW X1',
      first_name: 'jay'
    }
  ]

  shownGroup2 = null;
  constructor() { }

  ngOnInit() {
  }

  toggleGroup2(group2) {
    if (this.isGroupShown2(group2)) {
      this.shownGroup2 = null;
    } else {
      this.shownGroup2 = group2;
    }
  }

  isGroupShown2(group2) {
    return this.shownGroup2 === group2;
  }

}
