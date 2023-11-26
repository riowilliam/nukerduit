import { Injectable } from '@angular/core';
const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService {
  constructor() {}

  signOut(): void {
    this.clear();
    location.reload();
  }

  set(key: string, data: any, expirationInMinute?: number): void {
    const now = new Date().getTime();
    let item: { value: any; ttl?: number } = { value: data };
    if (expirationInMinute) {
      item['ttl'] = now + expirationInMinute * 60000;
    }
    sessionStorage.setItem(key, JSON.stringify(item));
  }

  get(key: string): any {
    const item = sessionStorage.getItem(key);
    if (!item) {
      return null;
    } else {
      const data = JSON.parse(item);
      const now = new Date().getTime();
      if (now > data.ttl) {
        this.clear();
        return null;
      } else {
        return data.value;
      }
    }
  }

  clear(): void {
    sessionStorage.clear();
  }
}
