import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { MultiSelectorsComponent } from './multiSelectors.component';
import { NgbDropdownModule, NgbModalModule, NgbRatingModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { routing } from './multiSelectors.routing';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    NgbDropdownModule,
    NgbModalModule,
    NgbRatingModule,
    NgbCarouselModule,
    routing,
  ],
  declarations: [
    MultiSelectorsComponent,

  ],
  providers: [
  ],
})
export class MultiSelectorsModule {
}
