import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

import { ListComponent } from './list.component';
import { Feed } from './feed';

import { routing } from './list.routing';
import { FeedService } from './feed/feed.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    NgbProgressbarModule,
    routing,
  ],
  declarations: [
    ListComponent,
    Feed,
  ],
  providers: [
    FeedService,
  ],
})
export class ListsModule {
}
