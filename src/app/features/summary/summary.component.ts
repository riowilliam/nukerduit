import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TransactionService } from 'src/app/core/services';
import { QueryParam } from 'src/app/models/query-param';
import { TableConfig } from 'src/app/models/table-config';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  formDropdownPeriodFc: FormControl;
  formDropdownPeriodFd = {
    id: 'period',
    placeholder: 'Pilih',
    class: 'form-control text-capitalize',
    options: ['Today', '1 Week', '1 Month'],
    value: 'Today',
  };
  tableConfig: TableConfig;
  tableData: Array<Object> = [];
  queryParams: QueryParam = {
    time: 'now',
  };

  constructor(private transactionSvc: TransactionService) {
    this.initTable();
  }

  ngOnInit(): void {
    this.getData(this.queryParams);
  }

  initTable(): void {
    this.tableConfig = {
      header: [
        {
          label: 'Currency',
          key: 'currency',
          sort: false,
        },
        {
          label: 'Total Buy',
          key: 'total_buy',
          sort: false,
        },
        {
          label: 'Total Sell',
          key: 'total_sell',
          sort: false,
        },
        {
          label: 'Available Amount',
          key: 'available_amount',
          sort: false,
        },
      ],
    };
  }

  setFormDropdownPeriodFc(fc: FormControl) {
    this.formDropdownPeriodFc = fc;
    this.formDropdownPeriodFc.valueChanges.subscribe((v) => {
      if (v === 'Today') {
        this.queryParams.time = 'now';
      } else if (v === '1 Week') {
        this.queryParams.time = 'week';
      } else if (v === '1 Month') {
        this.queryParams.time = 'month';
      }
      this.getData(this.queryParams);
    });
  }

  getData(params: QueryParam): void {
    this.transactionSvc.getTransaction(params).subscribe(
      (res: any) => {
        console.log(res);
        this.tableData = [];
        if (res.length > 0) {
          const dataArr = res.map((item: any) => {
            return {
              available_amount: item.available_amount,
              currency: item.currency,
              total_buy: item.total_buy,
              total_sell: item.total_sell,
            };
          });
          this.tableData = [...dataArr];
        } else {
          this.tableConfig.emptyMessage = 'Data not Found';
        }
      },
      (err: Error) => {
        this.tableData = [];
        this.tableConfig.emptyMessage = err.message;
      }
    );
  }
}
