import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { SessionStorageService } from 'src/app/core/services';

@Component({
  selector: 'app-sidemenu-item',
  templateUrl: './sidemenu-item.component.html',
  styleUrls: ['./sidemenu-item.component.scss'],
})
export class SidemenuItemComponent implements OnInit, OnDestroy {
  isHovered: boolean = false;
  isSidemenuClipped: boolean = true;
  currentSegment!: string;
  isChildExpanded: boolean = false;
  private subject = new Subject();
  private _property: any;
  @Input()
  set property(data: any) {
    this._property = data;
  }
  get property(): any {
    return this._property;
  }
  constructor(
    private router: Router,
    private sessionStorageSvc: SessionStorageService
  ) {
    this.currentSegment = '/' + router.url.split('/')[1];
    router.events
      .pipe(
        filter((evt) => evt instanceof NavigationEnd),
        map((evt: any) => '/' + evt.url.split('/')[1])
      )
      .subscribe((url) => (this.currentSegment = url));
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subject.next(true);
  }

  onClickMenu(): void {
    if (this.property.url === '/logout') {
      this.logout();
    } else {
      this.router.navigate([this.property.url]);
    }
  }

  logout(): void {
    this.sessionStorageSvc.signOut();
    this.router.navigate(['/auth/login']);
  }
}
