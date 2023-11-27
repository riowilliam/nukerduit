import { Component, Input, OnInit } from '@angular/core';
import { Notification } from 'src/app/models';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
  @Input() notification!: Notification;
  get bg(): string {
    if (this.notification.variant === 'error') {
      return '#FF2D55';
    } else if (this.notification.variant === 'success') {
      return '#34C759';
    } else {
      return '#17A2B8';
    }
  }
  constructor() {}

  ngOnInit(): void {}
}
