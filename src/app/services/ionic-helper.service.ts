import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';

@Injectable()
export class IonicHelperService {
    private loading: any;
    constructor(
        public loadingCtrl: LoadingController
    ) { }

    public showLoading() {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        this.loading.present();
    }

    public hideLoading() {
        this.loading.dismiss();
    }

}