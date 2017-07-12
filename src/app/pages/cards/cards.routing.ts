import { Routes, RouterModule } from '@angular/router';
import { CardsComponent } from './cards.component';
import { ModuleWithProviders } from '@angular/core';


// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: CardsComponent,
    children: [

    ],
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
