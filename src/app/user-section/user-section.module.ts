import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserSectionPageRoutingModule } from './user-section-routing.module';

import { UserSectionPage } from './user-section.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserSectionPageRoutingModule
  ],
  declarations: [UserSectionPage]
})
export class UserSectionPageModule {}
