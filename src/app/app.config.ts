import { InjectionToken } from '@angular/core';

export interface ApplicationConfig {
    appName: string;
    loginUrl: string;
    apartmentUrl: string;
    userDashboardUrl: string;
}

// Configuration values for our app
export const MY_CONFIG: ApplicationConfig = {
    appName: 'CubeBubbles',
    loginUrl: 'http://api.cubebubbles.com/api/ApiLogin/Login?uname={?}&&pwd={?}',
    apartmentUrl: 'http://api.cubebubbles.com/api/ApiApartment/ApartmentList?User_ID={?}&&Token={?}',
    userDashboardUrl: 'http://api.cubebubbles.com/api/ApiUser/User_Dashboard?User_ID={?}&&App_ID={?}&&Token={?}'
};

// Create a config token to avoid naming conflicts
export const MY_CONFIG_TOKEN = new InjectionToken<ApplicationConfig>('config');