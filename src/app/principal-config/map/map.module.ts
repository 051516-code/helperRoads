import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapPageRoutingModule } from './map-routing.module';

import { MapPage } from './map.page';
import { LoadingComponent } from '../../components/loading/loading.component';
import { MostPopularModule } from '../../components/most-popular/most-popular.module';

import { MapModule } from '../../components/map-component/map.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapPageRoutingModule,
    MostPopularModule,
    MapModule
  ],
  declarations: [
    MapPage,
    LoadingComponent,
  
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MapPageModule {}
