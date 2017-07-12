import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'multiSelectors',
  templateUrl: './multiSelectors.html',
  styleUrls: ['./multiSelectors.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MultiSelectorsComponent {
  closeResult: string;

  constructor( private modalService: NgbModal ) {
  }
  open(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }
  currentRate = 6;
  currenRate = 3;
}
