import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {
    constructor(private http: HttpClient) { }

    get<T>(url): Observable<T> {
        return this.http.get<T>(url);
    }
}