import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'vb-select',
  templateUrl: './dropDwon1.html',
  styleUrls: ['./dropDwon1.scss'],
})
export class VBDropDwonComponent implements OnInit {

   @Input() optionItem: any;
   @Input() vbValue: string;
   @Input() vbViewValue: string;
    @Output() onChanges = new EventEmitter<string>();
    selectedID: string = ' ';
  constructor() {
  }
  ngOnInit() {
  }
  onChange(selectedValue) {
    this.onChanges.emit(selectedValue);
  }
}
