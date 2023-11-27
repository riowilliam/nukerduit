import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from './api.service';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class DropdownService {
  paramsList: any = new BehaviorSubject([]);
  constructor(private apiSvc: ApiService) {
    this.apiSvc.getCurrencyCode().subscribe((res) => {
      this.paramsList.next(Object.keys(res.data));
    });
  }

  getExactParams(): Observable<any[]> {
    const options: any = new BehaviorSubject([]);
    this.paramsList.subscribe((obs: any) => {
      if (obs.length > 0) {
        options.next(obs);
      }
    });
    return options.asObservable();
  }
}
