import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellTransactionComponent } from './sell-transaction.component';

const routes: Routes = [{ path: '', component: SellTransactionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellTransactionRoutingModule {}
