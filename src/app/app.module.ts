import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FishingLogComponent } from './fishing-log/fishing-log.component';
import { FishingLogEditComponent } from './fishing-log-edit/fishing-log-edit.component';
import { FishingLogItemComponent } from './fishing-log-item/fishing-log-item.component';
import { FishingLogListComponent } from './fishing-log-list/fishing-log-list.component';
import { FishingLogDetailComponent } from './fishing-log-detail/fishing-log-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FishingLogComponent,
    FishingLogEditComponent,
    FishingLogItemComponent,
    FishingLogListComponent,
    FishingLogDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
