import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AppointmentsPage } from './appointments.page';
import { NgCalendarModule } from 'ionic2-calendar';
const routes: Routes = [
  {
    path: '',
    component: AppointmentsPage
  }
];

@NgModule({
  imports: [
    NgCalendarModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AppointmentsPage]
})
export class AppointmentsPageModule { }
