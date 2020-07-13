import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PharmacymapPage } from './pharmacymap.page';


const routes: Routes = [
  {
    path: '',
    component: PharmacymapPage
  }
];

@NgModule({
  imports: [
    CommonModule,

    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PharmacymapPage]
})
export class PharmacymapPageModule { }
