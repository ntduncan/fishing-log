import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FishingLogComponent } from './fishing-log/fishing-log.component';
import { FishingLogEditComponent } from './fishing-log-edit/fishing-log-edit.component';
import { FishingLogItemComponent } from './fishing-log-item/fishing-log-item.component';
import { FishingLogListComponent } from './fishing-log-list/fishing-log-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FishingLogComponent,
    FishingLogEditComponent,
    FishingLogItemComponent,
    FishingLogListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
