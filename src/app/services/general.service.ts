import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { map } from 'rxjs/operators';

// Import the config-related things
import { MY_CONFIG_TOKEN, ApplicationConfig } from '../app.config';
import { HelperService } from './helper.service';
import { DataService } from './data.service';

import { LoginModel } from '../model/login.model';
import { UserInfoModel } from '../model/userinfo.model';
import { UserDashBoard } from '../model/user-dashboard.model';

@Injectable()
export class GeneralService {
    constructor(
        @Inject(MY_CONFIG_TOKEN) private config: ApplicationConfig,
        private helperService: HelperService,
        private dataService: DataService
    ) { }

    onLogin(login: LoginModel): Observable<any> {
        let url = this.config.loginUrl;
        url = this.helperService.beautifyUrl(url, [login.username, login.password]);
        return this.dataService.get(url);
    }

    getApartmentDetails(userId: string, token: string): Observable<UserInfoModel[]> {
        let url = this.config.apartmentUrl;
        url = this.helperService.beautifyUrl(url, [userId, token]);
        return this.dataService.get(url)
            .pipe(
                map(res => {
                    return this.parseAprtmentDetails(res);
                }));
    }

    private parseAprtmentDetails(result): UserInfoModel[] {
        return result.map(element => {
            const userInfo = new UserInfoModel(element.App_Name, element.App_ID, element.APP_Number);
            return userInfo;
        });
    }

    getUserDashboard(userId: string, appId: string, token: string): Observable<UserDashBoard> {
        let url = this.config.userDashboardUrl;
        url = this.helperService.beautifyUrl(url, [userId, appId, token]);
        return this.dataService.get(url)
            .pipe(
                map(res => {
                    return this.parseUserDashboardInfo(res);
                }));
    }

    private parseUserDashboardInfo(res): UserDashBoard {
        return new UserDashBoard(
            res.CountFamily, res.CountGroup, res.CountVisiter,
            res.CountStaff, res.NoticeCount, res.DiscussionCount, res.blockcount,
            res.FlatCount, res.TotalUsers, res.ActiveUsers, res.CommitteMember,
            res.UnitStaffCount, res.StaffCount
        );
    }
}