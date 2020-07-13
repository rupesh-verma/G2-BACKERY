import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule) },
  { path: '', loadChildren: () => import('./pharmacy/pharmacy.module').then(m => m.PharmacyPageModule) },
  { path: 'app-landing', loadChildren: './app-landing/app-landing.module#AppLandingPageModule' },
  { path: 'log-in', loadChildren: './log-in/log-in.module#LogInPageModule' },
  { path: 'sign-up', loadChildren: './sign-up/sign-up.module#SignUpPageModule' },
  { path: 'forget-password', loadChildren: './forget-password/forget-password.module#ForgetPasswordPageModule' },
  { path: 'account-settings', loadChildren: './account-settings/account-settings.module#AccountSettingsPageModule' },
  { path: 'privacy-policy', loadChildren: './privacy-policy/privacy-policy.module#PrivacyPolicyPageModule' },
  { path: 'terms-services', loadChildren: './terms-services/terms-services.module#TermsServicesPageModule' },
  { path: 'faq', loadChildren: './faq/faq.module#FaqPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'pharmacy-description', loadChildren: './pharmacy-description/pharmacy-description.module#PharmacyDescriptionPageModule' },
  { path: 'chat-list', loadChildren: './chat-list/chat-list.module#ChatListPageModule' },
  { path: 'chat-room', loadChildren: './chat-room/chat-room.module#ChatRoomPageModule' },
  { path: 'appointments', loadChildren: './appointments/appointments.module#AppointmentsPageModule' },
  { path: 'transactions', loadChildren: './transactions/transactions.module#TransactionsPageModule' },
  { path: 'doctors-profile', loadChildren: './doctors-profile/doctors-profile.module#DoctorsProfilePageModule' },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
