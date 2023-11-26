import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
})
export class LabelComponent {
  @Input() label!: string;
  @Input() id!: string;
  @Input() required!: boolean;
  @Input() fc!: FormControl;
  constructor() {}
}
