import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InputComponent } from './components/input/input.component';
import { LabelComponent } from './components/label/label.component';
import { NotificationComponent } from './components/notification/notification.component';
import { FormService } from './form.service';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  exports: [LabelComponent, InputComponent, NotificationComponent],
  declarations: [LabelComponent, InputComponent, NotificationComponent],
  providers: [FormService, RouterModule],
})
export class FormModule {}
