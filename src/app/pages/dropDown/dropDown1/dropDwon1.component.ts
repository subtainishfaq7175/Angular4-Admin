import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vb-dropDwon',
  templateUrl: './dropDwon1.html',
  styleUrls: ['./dropDwon1.scss'],
})
export class VBDropDwonComponent implements OnInit {

   @Input() optionItem: any;
  constructor() {
  }
  ngOnInit() {
  }
}
