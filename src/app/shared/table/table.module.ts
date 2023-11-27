import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TableComponent],
  exports: [TableComponent],
  imports: [CommonModule],
  providers: [RouterModule],
})
export class TableModule {}
