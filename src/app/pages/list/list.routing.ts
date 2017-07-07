import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list.component';
import { ModuleWithProviders } from '@angular/core';


// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    children: [

    ],
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
