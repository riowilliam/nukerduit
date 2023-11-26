import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormModule } from './form/form.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  exports: [CommonModule, FormModule, FormsModule, ReactiveFormsModule],
  imports: [CommonModule],
  declarations: [],
  providers: [],
})
export class SharedModule {}
