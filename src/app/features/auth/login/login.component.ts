import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/core/services';
import { AuthService } from 'src/app/core/services/auth.service';
import { emailValidator } from 'src/app/shared/form/validator/email-validator.directive';
import { passwordValidator } from 'src/app/shared/form/validator/password-validator.directive';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginFg: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, emailValidator()]),
    password: new FormControl('', [Validators.required, passwordValidator()]),
  });
  emailFd = {
    type: 'email',
    label: 'Email',
    placeholder: 'nama@email.com',
    id: 'email',
    class: 'form-control',
  };
  passwordFd = {
    type: 'password',
    label: 'Password',
    id: 'password',
    class: 'form-control',
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  constructor(
    private authService: AuthService,
    private router: Router,
    private notificationSvc: NotificationService
  ) {}
  ngOnInit(): void {
    this.loginFg.get('email')?.valueChanges.subscribe((event) => {
      this.loginFg
        .get('email')
        ?.setValue(event?.toLowerCase(), { emitEvent: false });
    });
  }
  onSubmit(): void {
    if (this.loginFg.valid) {
      const login = this.loginFg.getRawValue();
      const payload = {
        email: login.email,
        password: login.password,
      };
      this.authService.login(payload).subscribe(
        (res) => {
          if (res) {
            this.isLoggedIn = true;
            this.notificationSvc.push('success', 'Login Successfully');
            this.router.navigate(['/home']);
          } else {
            this.isLoginFailed = true;
            this.errorMessage = 'Please check email and your password';
            this.handleError();
          }
        },
        (err: Error) => {
          this.isLoginFailed = true;
          this.errorMessage = err.message;
          this.handleError();
        }
      );
    } else {
      this.handleError();
    }
  }

  handleError(): void {
    this.loginFg.reset();
    this.loginFg.markAllAsTouched();
  }
}
