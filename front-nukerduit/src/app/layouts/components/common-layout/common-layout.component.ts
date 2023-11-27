import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/core/services';

@Component({
  selector: 'app-common-layout',
  templateUrl: './common-layout.component.html',
  styleUrls: ['./common-layout.component.scss'],
})
export class CommonLayoutComponent implements OnInit {
  notifications = this.notificationSvc.listen();
  constructor(private notificationSvc: NotificationService) {}

  ngOnInit(): void {}
}
