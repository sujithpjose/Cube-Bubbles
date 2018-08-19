// angular imports
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Ionic imports
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';


import { HomePage } from '../home/home';
import { GeneralService } from '../../app/services/general.service';
import { IonicHelperService } from '../../app/services/ionic-helper.service';
import { DataStore } from '../../app/services/data.store';
import { ApiKeyModel } from '../../app/model/api-key.model';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public loginForm: FormGroup;
  public isInvalidUser = false;
  public errorMsg: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private generalService: GeneralService,
    public loadingCtrl: LoadingController,
    private ionicHelperService: IonicHelperService,
    public formBuilder: FormBuilder,
    private dataStore: DataStore
  ) {
    this.loginForm = formBuilder.group({
      username: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.compose([Validators.minLength(4), Validators.required])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  doLogin() {
    console.log(this.loginForm.value);
    this.ionicHelperService.showLoading();

    this.generalService.onLogin(this.loginForm.value).subscribe(
      data => {
        this.processLogin(data);
        this.ionicHelperService.hideLoading();
      },
      err => {
        // TODO : handle error
        this.handleError('Server Error');
        this.ionicHelperService.hideLoading();
      }
    )
  }

  private processLogin(data: any) {
    const userDetails = data[0];
    if (userDetails === null) {
      //failed to login, show error
      this.handleError('The email and password you entered do not match.');
    }
    else {
      this.saveApiKeyModel(userDetails);
      this.navCtrl.push(HomePage);
    }
  }

  private saveApiKeyModel(userDetails: any) {
    const key = new ApiKeyModel(userDetails.User_ID, userDetails.Token, '', '');
    this.dataStore.updateApiKey(key);
  }

  private handleError(msg: string) {
    this.errorMsg = msg;
    this.isInvalidUser = true;
  }

}
