import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { TabGroupModule } from './tab-group/tab-group.module';
import {MatTabsModule} from '@angular/material/tabs';
import { TabGroupModule } from './modules/tab-group/tab-group.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TabGroupModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
