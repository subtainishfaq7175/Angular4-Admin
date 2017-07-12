import { Routes, RouterModule } from '@angular/router';
import { MultiSelectorsComponent } from './multiSelectors.component';
import { ModuleWithProviders } from '@angular/core';


// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: MultiSelectorsComponent,
    children: [

    ],
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
