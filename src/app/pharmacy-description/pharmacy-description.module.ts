import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PharmacyDescriptionPage } from './pharmacy-description.page';

const routes: Routes = [
  {
    path: '',
    component: PharmacyDescriptionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PharmacyDescriptionPage]
})
export class PharmacyDescriptionPageModule {}
