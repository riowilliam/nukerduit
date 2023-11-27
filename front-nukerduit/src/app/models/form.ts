import { Observable } from 'rxjs';

export class Form<T> {
  value?: string;
  id?: string;
  label?: string;
  type?: string;
  placeholder?: string;
  class?: string[];
  options: Array<any> | Observable<Array<string>>;
  constructor(data: {
    value?: string;
    id?: string;
    label?: string;
    type?: string;
    placeholder?: string;
    class?: string[];
    options?: Array<any> | Observable<Array<string>>;
  }) {
    this.value = data.value || '';
    this.id = data.id || '';
    this.label = data.label || '';
    this.type = data.type || '';
    this.placeholder = data.placeholder || '';
    this.class = data.class || [];
    this.options = data.options || [];
  }
}
