import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormModule } from './form/form.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from './table/table.module';
@NgModule({
  exports: [
    CommonModule,
    FormModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
  ],
  imports: [CommonModule],
  declarations: [],
  providers: [],
})
export class SharedModule {}
