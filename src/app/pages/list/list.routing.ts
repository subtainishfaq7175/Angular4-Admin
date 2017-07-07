import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list.component';


// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    children: [

    ],
  },
];

export const routing = RouterModule.forChild(routes);
