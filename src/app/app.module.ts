import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPrettyDateModule } from 'projects/ngx-pretty-date/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPrettyDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
