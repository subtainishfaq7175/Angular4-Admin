import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';

import { NgaModule } from '../../theme/nga.module';
import { TabsComponent } from './tabs.component';
import { Tab1 } from './tab1';
import { Tab2 } from './tab2';
import { ComitTab } from './comitTab';
import { NavBar } from './navbar';
import { routing } from './tabs.routing';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    NgbTabsetModule,
    routing,
  ],
  declarations: [
    TabsComponent,
    Tab1,
    Tab2,
    ComitTab,
    NavBar,

  ],
  providers: [
  ],
})
export class TabsModule {
}
