import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent} from './map.component'
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [MapComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MapModule { }
