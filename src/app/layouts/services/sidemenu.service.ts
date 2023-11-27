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
    return data.map(({ key }) => {
      return {
        label: key,
        url: `/${this._prettifyUrl(key)}`,
      };
    });
  }

  private _prettifyUrl(text: string): string {
    return text.toLowerCase().split(' ').join('-').replace('&', 'and');
  }
}
