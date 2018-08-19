import { Injectable } from '@angular/core';

@Injectable()
export class HelperService {
    constructor() { }
    public beautifyUrl(url: string, params: string[]): string {
        params.forEach(item => {
            url = url.replace('{?}', item);
        })

        return url;
    }
}