import { AbstractControl, ValidatorFn } from '@angular/forms';

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const password: string = control.value ? control.value.toString() : '';
    const minPasswordLength = 8;
    const maxPasswordLength = 10;
    if (password.length < minPasswordLength) {
      return { custom: '' };
    } else if (password.length > maxPasswordLength) {
      return { custom: '' };
    }
    return undefined!;
  };
}
