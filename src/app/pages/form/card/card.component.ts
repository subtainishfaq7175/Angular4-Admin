import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.html',
  styleUrls: ['./card.scss'],
})
export class CardComponent {
  @Input() loginCardClass: number;
  @Input() title: number;

  constructor() {
  }
}
