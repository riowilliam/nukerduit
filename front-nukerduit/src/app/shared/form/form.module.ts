import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InputComponent } from './components/input/input.component';
import { LabelComponent } from './components/label/label.component';
import { NotificationComponent } from './components/notification/notification.component';
import { FormService } from './form.service';
import { SelectComponent } from './components/select/select.component';
import { InputCurrencyComponent } from './components/input-currency/input-currency.component';
import { SelectWithHardcodeOptionsComponent } from './components/select-with-hardcode-options/select-with-hardcode-options.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  exports: [
    LabelComponent,
    InputComponent,
    NotificationComponent,
    SelectComponent,
    InputCurrencyComponent,
    SelectWithHardcodeOptionsComponent,
  ],
  declarations: [
    LabelComponent,
    InputComponent,
    NotificationComponent,
    SelectComponent,
    InputCurrencyComponent,
    SelectWithHardcodeOptionsComponent,
  ],
  providers: [FormService, RouterModule],
})
export class FormModule {}
