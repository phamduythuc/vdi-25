import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourcesDataComponent } from './resources-data/resources-data.component';
import {MatIconModule} from '@angular/material/icon';
import { CharPieModule } from '../char-pie/char-pie.module';

@NgModule({
  declarations: [
    ResourcesDataComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    CharPieModule
  ],
  exports: [ResourcesDataComponent]
})
export class ResourcesModule { }
