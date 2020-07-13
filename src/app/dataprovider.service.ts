import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DataproviderService {

    isLoggedIn = false;
    token: any;
    userID: any;
    // tslint:disable-next-line: variable-name
    public base_url = 'http://rahulbakery.com/';

  constructor(private http: HttpClient, public storage: Storage) {
    // //if(this.userID!==null){
    //   var accessTokenObj = JSON.parse(localStorage.getItem("token"));
    //   console.log(accessTokenObj.id);
    //   this.userID= accessTokenObj.id;
    // //}
    // storage.get('token').then((val) => {
    //   console.log(val)
    //   this.userID= val.id;
    //   console.log('user data',  this.userID);
    // });
  }

  createUser(user: any) {
    const body = JSON.stringify(user);
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return this.http.post('http://app.quicktreatment4u.com/api/v1/api_signup' , body, {
      headers
    });
  }

  loginUser(user: any) {
    console.log(user);
    const body = JSON.stringify(user);
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(this.base_url + 'token', body, {
      headers
    });
  }

  logout(user: any) {
    const body = JSON.stringify(user);
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return this.http.post('  http://app.quicktreatment4u.com/api/v1/logout/' , body, {
      headers
    });
  }

  changePassword(user: any) {
    console.log(user);
    const data = {
      new_password: user.new_password,
      old_password: user.old_password,
      user_id: this.userID
    };
    const body = JSON.stringify(data);
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return this.http.post('http://app.quicktreatment4u.com//api/v1/api_change_password/' , body, {
      headers
    });
  }

  nearByDocs(user: any) {
    const body = JSON.stringify(user);
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return this.http.post('http://app.quicktreatment4u.com/api/v1/doctor_nearby/' , body, {
      headers
    });
  }



  nearByPharmacy(user: any) {
    const body = JSON.stringify(user);
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return this.http.post('http://app.quicktreatment4u.com/api/v1/medical_nearby/' , body, {
      headers
    });
  }



  getUserData() {
    return this.http.get('http://app.quicktreatment4u.com/api/users/' + this.userID + '/');
  }

  updateProfile(user: any) {
    const body = JSON.stringify(user);
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return this.http.put('http://app.quicktreatment4u.com/api/users/' + this.userID + '/', body, {
      headers
    });
  }

  getApptTime(user: any) {
    console.log(user);
    const body = JSON.stringify(user);
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return this.http.post('http://app.quicktreatment4u.com/api/v1/api_slottime/' , body, {
      headers
    });
  }
}
