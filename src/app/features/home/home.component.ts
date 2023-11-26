import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { HomeService } from 'src/app/core/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  currencies: Observable<any>;
  constructor(private homeSvc: HomeService) {
    this.currencies = combineLatest([
      this.homeSvc.getBigCurrency({ from: 'JPY', to: 'IDR' }),
      this.homeSvc.getBigCurrency({ from: 'USD', to: 'IDR' }),
      this.homeSvc.getBigCurrency({ from: 'EUR', to: 'IDR' }),
      this.homeSvc.getBigCurrency({ from: 'SGD', to: 'IDR' }),
    ]).pipe(
      map((data) => {
        return data;
      })
    );
  }

  ngOnInit(): void {}
}
