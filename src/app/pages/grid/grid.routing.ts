import { Routes, RouterModule } from '@angular/router';
import { GridComponent } from './grid.component';
import { ModuleWithProviders } from '@angular/core';


// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: GridComponent,
    children: [

    ],
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
