import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard, GuestGuard, throwIfAlreadyLoaded } from './guards';
import {
  ApiService,
  AuthService,
  HttpService,
  NotificationService,
  SessionStorageService,
} from './services';
import { TokenService } from './services/token.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [
    AuthGuard,
    GuestGuard,
    ApiService,
    AuthService,
    HttpService,
    NotificationService,
    SessionStorageService,
    TokenService,
    UserService,
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
