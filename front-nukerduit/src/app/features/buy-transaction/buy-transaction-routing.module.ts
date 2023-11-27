import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyTransactionComponent } from './buy-transaction.component';

const routes: Routes = [{ path: '', component: BuyTransactionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuyTransactionRoutingModule {}
