import { Component, Input, Output } from '@angular/core';


@Component({
  selector: 'vb-grid',
  templateUrl: './dropDwon2.html',
  styleUrls: ['./dropDwon2.scss'],
})
export class DropDwon2 {
  @Input() fieldsData: string;
  @Input() gridData: string;
  @Input() titleData: string;
  @Input() tableHeight: number;
  constructor() {
  }
}
