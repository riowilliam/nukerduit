import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CommonLayoutComponent } from './components/common-layout/common-layout.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { SidemenuItemComponent } from './components/sidemenu-item/sidemenu-item.component';
import { NoLayoutComponent } from './components/no-layout/no-layout.component';
import { NotificationComponent } from './components/notification/notification.component';

@NgModule({
  declarations: [
    NoLayoutComponent,
    CommonLayoutComponent,
    SidemenuComponent,
    SidemenuItemComponent,
    NotificationComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class LayoutsModule {}
