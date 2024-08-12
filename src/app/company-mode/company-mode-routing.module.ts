import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyModePage } from './company-mode.page';

const routes: Routes = [
  {
    path: '',
    component: CompanyModePage,
    children: [
      {
        path: '',
        redirectTo: 'entry',
        pathMatch: 'full'
      },
      {
        path: 'entry',
        loadChildren: () => import('./entry/entry.module').then( m => m.EntryPageModule)
      },
      {
        path: '**',
        redirectTo: 'entry'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyModePageRoutingModule {}
