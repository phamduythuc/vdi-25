import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepComponent } from './homep/homep.component';
import { UserComponent } from './user/user.component';
import { DataComponent } from './data/data.component';
import { CardComponent } from './card/card.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import { TableDynamicModule } from 'src/app/table-dynamic/table-dynamic.module';

import { ResourcesModule } from '../resources/resources.module';
@NgModule({
  declarations: [
    HomepComponent,
    UserComponent,
    DataComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatIconModule,
    TableDynamicModule,
    ResourcesModule
  ],
  exports: [CardComponent]
})
export class TabGroupModule { }
