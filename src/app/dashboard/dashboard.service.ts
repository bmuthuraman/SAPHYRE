import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDashboard } from './dashboard';
import { Observable } from 'rxjs/Observable';


@Injectable ()
export class DashboardService {

    private _url: string = "/assets/data/dashboards.json";

    constructor (private http: HttpClient) {}

    getHome(): Observable<IDashboard[]> {
        return this.http.get<IDashboard[]>(this._url);
    }
}