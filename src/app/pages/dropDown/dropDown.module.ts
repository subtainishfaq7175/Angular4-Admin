import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { DropDownComponent } from './dropDown.component';
import { NgbDropdownModule, NgbModalModule, NgbAccordionModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { MdSelectModule } from '@angular/material';


import { routing } from './dropDown.routing';
import { VBDropDwonComponent } from './dropDown1/dropDwon1.component';
import { DropDwon2 } from './dropDwon2/dropDwon2.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    NgbDropdownModule,
    NgbModalModule,
    NgaModule,
    NgbAccordionModule,
    NgbPaginationModule,
    routing,
    MdSelectModule,
  ],
  declarations: [
    DropDownComponent,
    DropDwon2,
    VBDropDwonComponent,

  ],
  providers: [
  ],
})
export class DropDownModule {
}
