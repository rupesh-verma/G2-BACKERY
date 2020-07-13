import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataproviderService } from '../dataprovider.service';
@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.page.html',
  styleUrls: ['./account-settings.page.scss'],
})
export class AccountSettingsPage implements OnInit {

  ngOnInit() {
  }

  public slideOneForm: FormGroup;
  public submitAttempt: boolean = false;

  constructor(public formBuilder: FormBuilder, public dataservice:DataproviderService ) {

    this.slideOneForm = formBuilder.group({
      old_password: ['', Validators.compose([Validators.maxLength(30), Validators.minLength(8), Validators.required])],
      new_password: ['', Validators.compose([Validators.maxLength(30),Validators.minLength(8), Validators.required])],
      confirm_new_password: ['', Validators.compose([Validators.maxLength(30),Validators.minLength(8),  Validators.required])],
    });
  }

  save() {
    this.submitAttempt = true;
    console.log(this.slideOneForm.value);
    this.dataservice.changePassword(this.slideOneForm.value).subscribe((user: any)=>{
      console.log(user)
    }, error => {
      this.submitAttempt = true;
    })
  }
}
