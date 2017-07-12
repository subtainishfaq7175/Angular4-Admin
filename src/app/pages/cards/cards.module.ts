import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { CardsComponent } from './cards.component';

import { routing } from './cards.routing';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
  ],
  declarations: [
    CardsComponent,

  ],
  providers: [
  ],
})
export class CardsModule {
}
