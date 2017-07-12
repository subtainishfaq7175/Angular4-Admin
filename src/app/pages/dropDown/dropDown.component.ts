import { Component } from '@angular/core';
import { NgbAccordionConfig, NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'dropDown',
  templateUrl: './dropDown.html',
  styleUrls: ['./dropDown.scss'],
  providers: [NgbAccordionConfig, NgbPaginationConfig],
})
export class DropDownComponent {
  page = 4;

  constructor(config: NgbAccordionConfig, configg: NgbPaginationConfig) {
    config.closeOthers = true;
    config.type = 'info';

    configg.size = 'sm';
    configg.boundaryLinks = true;
  }

}
