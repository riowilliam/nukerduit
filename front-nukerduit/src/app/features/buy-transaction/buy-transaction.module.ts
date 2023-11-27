import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared';
import { BuyTransactionRoutingModule } from './buy-transaction-routing.module';
import { BuyTransactionComponent } from './buy-transaction.component';

@NgModule({
  declarations: [BuyTransactionComponent],
  imports: [CommonModule, BuyTransactionRoutingModule, SharedModule],
})
export class BuyTransactionModule {}
