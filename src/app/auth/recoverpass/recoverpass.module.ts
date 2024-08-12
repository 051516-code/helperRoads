import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecoverpassPageRoutingModule } from './recoverpass-routing.module';

import { RecoverpassPage } from './recoverpass.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecoverpassPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RecoverpassPage]
})
export class RecoverpassPageModule {}
