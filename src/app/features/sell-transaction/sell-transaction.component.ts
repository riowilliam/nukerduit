import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import {
  DropdownService,
  HomeService,
  TransactionService,
} from 'src/app/core/services';

@Component({
  selector: 'app-sell-transaction',
  templateUrl: './sell-transaction.component.html',
  styleUrls: ['./sell-transaction.component.scss'],
})
export class SellTransactionComponent implements OnInit {
  formDropdownCurrencyFc: FormControl;
  formDropdownCurrencyFd = {
    id: 'Currency',
    label: 'Currency',
    placeholder: 'Select Currency',
    class: 'form-control text-capitalize',
    options: this.dropdownSvc.getExactParams(),
  };
  formInputAmountFd = {
    id: 'amount',
    label: 'Amount',
    placeholder: 'Amount',
    class: 'form-control',
  };
  formInputAmountFc: FormControl;
  formInputTotalFd = {
    id: 'total',
    label: 'Total in IDR',
    placeholder: 'Total',
    class: 'form-control',
  };
  formInputTotalFc: FormControl;

  get currencyCode() {
    return this.formDropdownCurrencyFc.value;
  }

  get amount() {
    return this.formInputAmountFc.value;
  }

  constructor(
    private dropdownSvc: DropdownService,
    private homeSvc: HomeService,
    private transactionSvc: TransactionService
  ) {}

  ngOnInit(): void {}

  setFormDropdownCurrencyFc(fc: FormControl) {
    this.formDropdownCurrencyFc = fc;
    this.formDropdownCurrencyFc.valueChanges
      .pipe(
        distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b)),
        debounceTime(500)
      )
      .subscribe((v) => {
        if (v && this.amount) {
          this.homeSvc
            .getBigCurrency({ amount: this.amount, from: v })
            .subscribe(({ rates: { IDR } }) => {
              this.formInputTotalFc.setValue(IDR);
            });
        }
      });
  }

  setFormInputAmountFc(fc: FormControl) {
    this.formInputAmountFc = fc;
    this.formInputAmountFc.valueChanges
      .pipe(
        distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b)),
        debounceTime(500)
      )
      .subscribe((v) => {
        if (v && this.currencyCode) {
          this.homeSvc
            .getBigCurrency({ amount: v, from: this.currencyCode })
            .subscribe(({ rates: { IDR } }) => {
              this.formInputTotalFc.setValue(IDR);
            });
        }
      });
  }

  setFormInputTotalFc(fc: FormControl) {
    this.formInputTotalFc = fc;
  }

  onSubmit() {
    const payload = {
      currency: this.formDropdownCurrencyFc.value,
      buy: this.formInputAmountFc.value,
      sell: this.formInputTotalFc.value,
      status: 'sell',
    };
    this.transactionSvc.postTransaction(payload).subscribe((res) => {
      if (res) {
        this.onReset();
      }
    });
  }

  onReset() {
    this.formDropdownCurrencyFc.reset('');
    this.formInputAmountFc.reset();
    this.formInputTotalFc.reset();
  }
}
