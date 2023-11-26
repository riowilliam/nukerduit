import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SIDE_MENU_ITEM } from 'src/app/mock';
import { SidemenuItem } from 'src/app/models/sidemenu';

@Injectable({
  providedIn: 'root',
})
export class SidemenuService {
  private menuItems: BehaviorSubject<any> = new BehaviorSubject([]);
  currentActiveMenu: BehaviorSubject<string> = new BehaviorSubject('');
  items = this.menuItems.asObservable();
  constructor() {
    this.menuItems.next(this._generateSidemenuItems(SIDE_MENU_ITEM));
  }

  private _generateSidemenuItems(data: SidemenuItem[]) {
    return data.map(({ key, children }) => {
      return {
        label: key,
        imgSrc: {
          default: `assets/images/layouts/${this._prettifyUrl(
            key
          )}-default.svg`,
          active: `assets/images/layouts/${this._prettifyUrl(key)}-active.svg`,
        },
        url: `/${this._prettifyUrl(key)}`,
        ...(children && { children: this._mapChild(children, key) }),
      };
    });
  }

  private _prettifyUrl(text: string): string {
    return text.toLowerCase().split(' ').join('-').replace('&', 'and');
  }

  private _mapChild(child: string[], parent: string) {
    return child.map((i) => {
      return {
        label: i,
        url: `/${this._prettifyUrl(parent)}/${this._prettifyUrl(i)}`,
      };
    });
  }
}
