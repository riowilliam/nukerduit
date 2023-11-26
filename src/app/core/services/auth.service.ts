import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { TokenService } from './token.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private status: boolean;
  constructor(
    private apiSvc: ApiService,
    private tokenSvc: TokenService,
    private userSvc: UserService
  ) {
    this.status = this.tokenSvc.get() ? true : false;
  }

  login(payload: any): Observable<boolean> {
    return new Observable((obs) => {
      this.apiSvc.postLogin(payload).subscribe(
        ({ data }) => {
          this.tokenSvc.set(data.token);
          this.userSvc.set(data);
          obs.next(true);
        },
        () => {
          obs.next(false);
        }
      );
    });
  }

  isSignedIn(): boolean {
    return this.status;
  }
}
