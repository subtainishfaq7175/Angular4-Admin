import { Routes, RouterModule } from '@angular/router';
import { TabsComponent } from './tabs.component';
import { ModuleWithProviders } from '@angular/core';


// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: TabsComponent,
    children: [

    ],
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
