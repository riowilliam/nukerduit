import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TableConfig } from 'src/app/models/table-config';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() config: TableConfig;
  @Input() dataSource: any;
  @Input() rowPerPage: number = 1;
  @Output() sortAction: EventEmitter<Object> = new EventEmitter();
  constructor(private modalSvc: NgbModal) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.config) {
      this.config.header.forEach((item: any) => {
        if (item.sort) item.direction = 'none';
      });
    }
  }

  toggleDirection(key: string, direction: 'none' | 'desc' | 'asc') {
    const state = ['desc', 'asc', 'none'] as const;
    let i = state.indexOf(direction);
    this.config.header.forEach((item: any) => {
      if (item.key == key) {
        i = ++i % state.length;
        item.direction = state[i];
        this.sortAction.emit({ key: key, direction: state[i] });
      } else {
        item.direction = 'none';
      }
    });
  }

  isNumber(value: any): boolean {
    return !isNaN(value);
  }

  onClickPopUpModal(content: any) {
    this.modalSvc.open(content, { centered: true });
  }
}
