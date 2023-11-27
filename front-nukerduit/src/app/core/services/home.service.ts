import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(
    private apiSvc: ApiService,
    private notificationSvc: NotificationService
  ) {}

  getBigCurrency(queryParam?: object): Observable<any> {
    return new Observable((obs) => {
      this.apiSvc.getCurrencyExchange(queryParam).subscribe(
        (res) => {
          if (res.data) {
            obs.next(res.data);
          } else {
            obs.next(false);
            this.notificationSvc.push('error', res.message);
          }
        },
        (err) => {
          obs.next(false);
          this.notificationSvc.push('error', err.error.message);
        }
      );
    });
  }
}
