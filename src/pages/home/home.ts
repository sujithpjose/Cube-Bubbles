import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DataStore } from '../../app/services/data.store';
import { GeneralService } from '../../app/services/general.service';
import { IonicHelperService } from '../../app/services/ionic-helper.service';
import { ApiKeyModel } from '../../app/model/api-key.model';
import { UserInfoModel } from '../../app/model/userinfo.model';
import { UserDashBoard } from '../../app/model/user-dashboard.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userInfo: UserInfoModel[] = [];
  selectedApartment: string;
  dashboardInfo: UserDashBoard;

  constructor(
    public navCtrl: NavController,
    private dataStore: DataStore,
    private generalService: GeneralService,
    private ionicHelperService: IonicHelperService
  ) { }

  ionViewDidEnter() {
    this.ionicHelperService.showLoading();
    this.getDashboardDetails();
  }

  private getDashboardDetails() {
    this.getApartmentDetails();
  }

  private getApartmentDetails() {
    const apiKey: ApiKeyModel = this.dataStore.getCommonKey();

    this.generalService.getApartmentDetails(apiKey.userId, apiKey.token).subscribe(data => {
      this.processApartmentDetails(data);
      this.invokeUserDashboard(apiKey);
    }, err => {
      console.log(err);
      this.ionicHelperService.hideLoading();
    });
  }

  private invokeUserDashboard(apiKey: ApiKeyModel) {
    this.generalService.getUserDashboard(apiKey.userId, this.selectedApartment, apiKey.token).subscribe(data => {
      this.dashboardInfo = data;
      this.ionicHelperService.hideLoading();
    });
  }

  private processApartmentDetails(data) {
    this.userInfo = data;
    this.selectedApartment = this.userInfo[0].apartmentId;
  }

  public onApartmentChange() {
    const apiKey: ApiKeyModel = this.dataStore.getCommonKey();
    console.log(this.selectedApartment);
    this.invokeUserDashboard(apiKey);
  }

}
