import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifyCodePageRoutingModule } from './verify-code-routing.module';

import { VerifyCodePage } from './verify-code.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifyCodePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [VerifyCodePage]
})
export class VerifyCodePageModule {}
