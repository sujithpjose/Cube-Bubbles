import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
/* import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login'; */

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';

import { MY_CONFIG_TOKEN, MY_CONFIG } from '../app/app.config';

import { GeneralService } from '../app/services/general.service';
import { HelperService } from '../app/services/helper.service';
import { DataService } from '../app/services/data.service';
import { IonicHelperService } from '../app/services/ionic-helper.service';
import { DataStore } from '../app/services/data.store';

@NgModule({
  declarations: [
    MyApp,
/*     HomePage,
    ListPage,
    LoginPage */
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      scrollPadding: false,
      scrollAssist: true,
      autoFocusAssist: false
      // animate: false // disable animations in all application
    }),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
/*     HomePage,
    ListPage,
    LoginPage */
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    NativePageTransitions,
    DataService,
    HelperService,
    GeneralService,
    IonicHelperService,
    DataStore,
    { provide: MY_CONFIG_TOKEN, useValue: MY_CONFIG }
  ]
})
export class AppModule { }
