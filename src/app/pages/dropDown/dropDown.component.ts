import { Component, OnInit } from '@angular/core';
import { NgbAccordionConfig, NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'dropDown',
  templateUrl: './dropDown.html',
  styleUrls: ['./dropDown.scss'],
  providers: [NgbAccordionConfig, NgbPaginationConfig],
})
export class DropDownComponent implements OnInit {
  page = 4;
  name: any;
  constructor(config: NgbAccordionConfig, configg: NgbPaginationConfig) {
    config.closeOthers = true;
    config.type = 'info';

    configg.size = 'sm';
    configg.boundaryLinks = true;
  }
  foods = [
    { id: '0', name: 'Steak' , contectno: '03062488099' , adress: 'Multan' },
    { id: '1', name: 'Pizza' , contectno: '123456789' , adress: 'Multan' },
    { id: '2', name: 'Tacos' , contectno: '987654321' , adress: 'Multan' },
    { id: '3', name: 'Steak' , contectno: '03062488099' , adress: 'Multan' },
    { id: '4', name: 'Pizza' , contectno: '123456789' , adress: 'Multan' },
    { id: '5', name: 'Tacos' , contectno: '987654321' , adress: 'Multan' },
    { id: '6', name: 'Steak' , contectno: '03062488099' , adress: 'Multan' },
    { id: '7', name: 'Pizza' , contectno: '123456789' , adress: 'Multan' },
    { id: '8', name: 'Tacos' , contectno: '987654321' , adress: 'Multan' },
    { id: '9', name: 'Steak' , contectno: '03062488099' , adress: 'Multan' },
    { id: '10', name: 'Pizza' , contectno: '123456789' , adress: 'Multan' },
    { id: '11', name: 'Tacos' , contectno: '987654321' , adress: 'Multan' },
  ];
  fields = ['id', 'name', 'contectno' , 'adress'];
  titles = ['ID', 'Name', 'Contect No' , 'Address'];
  tableHeight: number;
  ngOnInit() {
  }
  onChanges(value: string) {
    alert(value);
  }
}
