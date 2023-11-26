import { Injectable } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { Notification, NotificationVariant } from 'src/app/models';

@Injectable()
export class NotificationService {
  private _notifications$: BehaviorSubject<Notification[]> =
    new BehaviorSubject<Notification[]>([]);
  constructor() {}

  push(variant: NotificationVariant, message: any, timeout?: number): void {
    const queue = this._notifications$.value;
    const currentId = this._setCurrentId(queue.map((item) => item.id));
    const data = {
      id: currentId,
      variant: variant,
      message: message,
      timeout: timeout ? timeout : 3000,
    };
    this._notifications$.next([...queue, data]);
    this._removeNotification(data).subscribe();
  }

  private _setCurrentId(arrOfNumber: number[]): number {
    const currentId = Math.max(...arrOfNumber);
    return currentId === -Infinity ? 1 : currentId + 1;
  }

  private _removeNotification(data: Notification) {
    const unsubscribe$ = new Subject();
    return timer(data.timeout).pipe(
      takeUntil(unsubscribe$),
      tap(() => {
        const value = this._notifications$.value;
        this._notifications$.next(value.filter(({ id }) => id !== data.id));
        unsubscribe$.next(true);
      })
    );
  }

  listen() {
    return this._notifications$.asObservable();
  }
}
