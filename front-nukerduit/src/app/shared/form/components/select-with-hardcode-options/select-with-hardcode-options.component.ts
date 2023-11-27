import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Form } from 'src/app/models';
import { FormService } from '../../form.service';

@Component({
  selector: 'app-select-with-hardcode-options',
  templateUrl: './select-with-hardcode-options.component.html',
  styleUrls: ['./../form-control.components.scss'],
})
export class SelectWithHardcodeOptionsComponent implements OnInit {
  @Input() formData: Form<any> | any;
  @Input() formGroup: FormGroup;
  @Output() fcObject: EventEmitter<FormControl>;
  @Output() formControlObject: EventEmitter<any>;
  fc: FormControl;

  constructor(private formSvc: FormService) {
    this.fcObject = new EventEmitter();
    this.formControlObject = new EventEmitter();
  }

  ngOnInit(): void {
    this.formData = this.formSvc.createForm(this.formData);
    this.fc = this.formSvc.createFormControl(this.formData, this.formGroup);
    this.fcObject.emit(this.fc);
    this.formControlObject.emit({
      fc: this.fc,
      id: this.formData.id,
    });
  }
}
