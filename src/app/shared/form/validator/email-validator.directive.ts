import { AbstractControl, ValidatorFn } from '@angular/forms';

export function emailValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const email = control.value ? control.value.toString() : '';
    const regex: RegExp =
      /^(([^<>(){}~@#/|`?$^*=!%&\[\]\\.,;:-\s@"]+(\.[^<>(){}~@#/|`?$^*=!%&\[\]\\.,;:-\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email === '') {
      return undefined!;
    }
    if (!regex.test(email)) {
      return { custom: '' };
    }
    return undefined!;
  };
}
