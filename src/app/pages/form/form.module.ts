import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';

import { FormComponent } from './form.component';

import { routing } from './form.routing';
import { LoginComponent } from './login/login.component';
import { CommitComponent } from './commit/commit.component';
import { RegisterComponent } from './register/register.component';
import { CardComponent } from './card/card.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    NgbTabsetModule,
    routing,
  ],
  declarations: [
    FormComponent,
    CommitComponent,
    LoginComponent,
    CardComponent,
    RegisterComponent,

  ],
  providers: [
  ],
})
export class FormModule {
}
