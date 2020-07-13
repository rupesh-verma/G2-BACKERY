import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PharmacyPage } from './pharmacy.page';

// const routes: Routes = [
//   {
//     path: 'pharmacy',
//     component: PharmacyPage,
//     children: [
//       { path: 'pharmacylist', loadChildren: '../pharmacylist/pharmacylist.module#PharmacylistPageModule' },
//       { path: 'pharmacymap', loadChildren: '../pharmacymap/pharmacymap.module#PharmacymapPageModule' },
//       { path: '', redirectTo: '/pharmacy/pharmacylist', pathMatch: 'full' }
//     ]
//   },
//   {
//     path: '',
//     redirectTo: '/pharmacy/pharmacylist',
//     pathMatch: 'full'
//   }
// ];

const routes: Routes = [
  {
    path: 'pharmacy',
    component: PharmacyPage,
    children: [
      {
        path: 'pharmacylist',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pharmacylist/pharmacylist.module').then(m => m.PharmacylistPageModule)
          }
        ]
      },
      {
        path: 'pharmacymap',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pharmacymap/pharmacymap.module').then(m => m.PharmacymapPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/pharmacy/pharmacylist',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/pharmacy/pharmacylist',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PharmacyPage]
})
export class PharmacyPageModule { }
