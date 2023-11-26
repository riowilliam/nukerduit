import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureNotFoundComponent } from './feature-not-found.component';

const routes: Routes = [{ path: '', component: FeatureNotFoundComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureNotFoundRoutingModule {}
