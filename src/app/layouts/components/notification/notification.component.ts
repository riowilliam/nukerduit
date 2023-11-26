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
    return this.notification.variant === 'error' ? '#FF2D55' : '#34C759';
  }
  constructor() {}

  ngOnInit(): void {}
}
