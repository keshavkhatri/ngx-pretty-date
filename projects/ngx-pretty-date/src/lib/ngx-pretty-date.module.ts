import { NgModule } from '@angular/core';
import { NgxPrettyDateComponent } from './ngx-pretty-date.component';
import { PrettyDate } from './ngx-pretty-date.pipe';

@NgModule({
    declarations: [NgxPrettyDateComponent, PrettyDate],
    imports: [
    ],
    exports: [NgxPrettyDateComponent, PrettyDate]
})
export class NgxPrettyDateModule { }
