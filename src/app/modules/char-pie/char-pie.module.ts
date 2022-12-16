import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharResourcesComponent } from './char-resources/char-resources.component';


@NgModule({
  declarations: [
    CharResourcesComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [CharResourcesComponent
  ],

})
export class CharPieModule { }
