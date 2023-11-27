import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  constructor(
    private apiSvc: ApiService,
    private notificationSvc: NotificationService
  ) {}

  postTransaction(request: any): Observable<any> {
    return new Observable((obs) => {
      this.apiSvc.postTransaction(request).subscribe(
        (res) => {
          if (res.data) {
            obs.next(res.data);
            this.notificationSvc.push('success', res.message);
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
