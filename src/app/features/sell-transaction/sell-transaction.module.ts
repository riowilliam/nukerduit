import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared';
import { SellTransactionRoutingModule } from './sell-transaction-routing.module';
import { SellTransactionComponent } from './sell-transaction.component';

@NgModule({
  declarations: [SellTransactionComponent],
  imports: [CommonModule, SellTransactionRoutingModule, SharedModule],
})
export class SellTransactionModule {}
