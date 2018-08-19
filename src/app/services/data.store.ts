import { Injectable } from '@angular/core';

import { ApiKeyModel } from '../model/api-key.model';

@Injectable()
export class DataStore {
    private _commonKey: ApiKeyModel;

    constructor() {
        // this.commonKey = data;
    }

    public getCommonKey(): ApiKeyModel {
        return this._commonKey;
    }
    public setCommonKey(value: ApiKeyModel) {
        this._commonKey = value;
    }

    public updateApiKey(data) {
        if (!this._commonKey) {
            this._commonKey = data;
        } else {
            for (let key in data) {
                if (!data.hasOwnProperty(key)) continue;
                this._commonKey[key] = data[key];
            }
        }
    }
}