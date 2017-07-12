import { Component } from '@angular/core';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.html',
  styleUrls: ['./tabs.scss'],
})
export class TabsComponent {

  constructor() {}
   beforeChange($event: NgbTabChangeEvent) {
    if ($event.nextId === 'tab-preventchange2') {
      $event.preventDefault();
    }
  }

}
