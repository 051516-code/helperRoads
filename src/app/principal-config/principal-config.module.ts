import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrincipalConfigPageRoutingModule } from './principal-config-routing.module';

import { PrincipalConfigPage } from './principal-config.page';

import { LoadingComponent } from '../components/loading/loading.component';
import { MapModule } from '../components/map-component/map.module';
import { MostPopularComponent } from '../components/most-popular/most-popular.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrincipalConfigPageRoutingModule,
    MapModule
  ],
  declarations: [
    PrincipalConfigPage,
    LoadingComponent,
    MostPopularComponent
   
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PrincipalConfigPageModule {}
