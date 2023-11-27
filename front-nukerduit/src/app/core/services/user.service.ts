import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SessionStorageService } from '.';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _user: BehaviorSubject<any> = new BehaviorSubject('');
  constructor(private sessionStorageSvc: SessionStorageService) {
    this._user.next(this.sessionStorageSvc.get('user'));
  }

  set(user: any): void {
    this.sessionStorageSvc.set('user', user);
    this._user.next(user);
  }

  get(): any {
    return this._user.getValue();
  }
}
