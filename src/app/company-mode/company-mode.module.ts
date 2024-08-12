import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanyModePageRoutingModule } from './company-mode-routing.module';

import { CompanyModePage } from './company-mode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompanyModePageRoutingModule
  ],
  declarations: [CompanyModePage]
})
export class CompanyModePageModule {}
