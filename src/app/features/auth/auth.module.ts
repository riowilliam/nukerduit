import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [AuthRoutingModule, SharedModule],
})
export class AuthModule {}
