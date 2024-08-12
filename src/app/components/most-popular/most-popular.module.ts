import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MostPopularComponent } from './most-popular.component';


@NgModule({
  declarations: [
    MostPopularComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MostPopularComponent // Exporta el componente para su uso en otros módulos
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA] 
})
export class MostPopularModule { }
