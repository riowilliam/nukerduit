import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Form } from 'src/app/models/form';
@Injectable()
export class FormService {
  createForm(formData: any): Form<any> {
    switch (formData.type) {
      default:
        return new Form(formData);
    }
  }

  createFormControl(formData: any, formGroup?: FormGroup): FormControl {
    return formGroup
      ? (formGroup.controls[formData.id] as FormControl)
      : new FormControl(formData.value);
  }
}
