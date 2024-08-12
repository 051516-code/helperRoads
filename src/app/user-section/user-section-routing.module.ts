import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserSectionPage } from './user-section.page';

const routes: Routes = [
  {
    path: '',
    component: UserSectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserSectionPageRoutingModule {}
