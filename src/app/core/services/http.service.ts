import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private api: string = environment.api;
  constructor(private http: HttpClient, private tokenSvc: TokenService) {}

  ngOnInit() {}

  setApiURL(url: string): string {
    if (url.includes('+')) {
      url = url.replace(/\+/g, '%2B');
    }
    return `${this.api}/${url}`;
  }

  header(): any {
    const header: any = {
      accept: 'application/json',
      'content-type': 'application/json',
    };
    if (this.tokenSvc.get())
      header.authorization = `Bearer ${this.tokenSvc.get()}`;
    return header;
  }

  makeHeaders(headerObject: any): HttpHeaders {
    const headers = new HttpHeaders(headerObject);
    return headers;
  }

  getData(url: string, params?: {}, header?: any): Observable<any> {
    return new Observable((obs) => {
      const httpURL = url.includes('http') ? url : this.setApiURL(url);
      const httpHeader = header
        ? this.makeHeaders(header)
        : this.makeHeaders(this.header());
      const httpParams = params;
      this.http
        .get(httpURL, {
          headers: httpHeader,
          observe: 'response',
          params: httpParams,
        })
        .subscribe(
          (res) => {
            obs.next(res.body);
          },
          (err: HttpErrorResponse) => {
            obs.error(err);
          },
          () => {
            obs.complete();
          }
        );
    });
  }

  postData(url: string, body: any = '', header?: any): Observable<any> {
    return new Observable((obs) => {
      const httpURL = url.includes('http') ? url : this.setApiURL(url);
      const httpHeader = header
        ? this.makeHeaders(header)
        : this.makeHeaders(this.header());
      this.http
        .post(httpURL, body, {
          headers: httpHeader,
          observe: 'response',
        })
        .subscribe(
          (res) => {
            obs.next(res.body);
          },
          (err: HttpErrorResponse) => {
            obs.error(err);
          },
          () => {
            obs.complete();
          }
        );
    });
  }
}
