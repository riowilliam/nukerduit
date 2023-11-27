export class TableConfig {
  header: {
    label: string;
    key: string;
    direction?: 'none' | 'asc' | 'desc';
    sort?: boolean;
    type?: string;
  }[];
  emptyMessage?: string;
  constructor(data: {
    header: {
      label: string;
      key: string;
      direction?: 'none' | 'asc' | 'desc';
      sort?: boolean;
      type?: string;
    }[];
    emptyMessage?: string;
  }) {
    this.header = data.header;
    this.emptyMessage = data.emptyMessage || '';
  }
}
