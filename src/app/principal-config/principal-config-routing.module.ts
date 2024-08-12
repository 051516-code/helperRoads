import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincipalConfigPage } from './principal-config.page';

const routes: Routes = [
  {
    path: '',
    component: PrincipalConfigPage,
  },
  {
    path: 'company-list',
    loadChildren: () => import('./company-list/company-list.module').then( m => m.CompanyListPageModule)
  },
  {
    path: 'company-profile',
    loadChildren: () => import('./company-profile/company-profile.module').then( m => m.CompanyProfilePageModule)
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrincipalConfigPageRoutingModule {}
