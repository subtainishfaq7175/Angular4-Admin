import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { DropDownComponent } from './dropDown.component';
import { NgbDropdownModule, NgbModalModule, NgbAccordionModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { routing } from './dropDown.routing';
import { DropDwon1 } from './dropDown1/dropDwon1.component';
import { DropDwon2 } from './dropDwon2/dropDwon2.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbDropdownModule,
    NgbModalModule,
    NgaModule,
    NgbAccordionModule,
    NgbPaginationModule,
    routing,
  ],
  declarations: [
    DropDownComponent,
    DropDwon2,
    DropDwon1,

  ],
  providers: [
  ],
})
export class DropDownModule {
}
