import { Component, Input } from '@angular/core';


@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class LoginComponent {
  @Input() name: string;
  @Input() age: number;
  constructor() {
  }
}
