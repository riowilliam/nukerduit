import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpSvc: HttpService) {}

  postLogin(payload: any): Observable<any> {
    return this.httpSvc.postData('auth/login', payload);
  }

  getCurrencyExchange(queryParam?: object): Observable<any> {
    return this.httpSvc.getData('currency/exchange', { ...queryParam });
  }
}
