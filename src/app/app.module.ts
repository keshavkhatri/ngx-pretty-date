import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgxPrettyDateModule } from 'projects/ngx-pretty-date/src/public-api';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        NgxPrettyDateModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
