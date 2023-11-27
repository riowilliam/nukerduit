import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SessionStorageService } from '.';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private _token: BehaviorSubject<any> = new BehaviorSubject('');
  constructor(private sessionStorageSvc: SessionStorageService) {
    this._token.next(this.sessionStorageSvc.get('token'));
  }

  set(token: any): void {
    this.sessionStorageSvc.set('token', token, 60);
    this._token.next(token);
  }

  get(): any {
    return this._token.getValue();
  }
}
