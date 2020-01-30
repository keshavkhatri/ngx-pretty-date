import { Component } from '@angular/core';

@Component({
    selector: 'angular-pretty-date-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    justnow = new Date();
    aMinAgo = new Date();
    fewMinAgo = new Date();
    anHourAgo = new Date();
    fewHoursAgo = new Date();
    yesterday = new Date();
    fewDays = new Date();
    weekago = new Date();
    manyDays = new Date();
    manyMonths = new Date();
    manyYears = new Date();

    ngOnInit(){
        this.aMinAgo.setMinutes(this.aMinAgo.getMinutes() - 1);
        this.fewMinAgo.setMinutes(this.fewMinAgo.getMinutes() - 5);
        this.anHourAgo.setHours(this.anHourAgo.getHours() - 1);
        this.fewHoursAgo.setHours(this.fewHoursAgo.getHours() - 5);
        this.yesterday.setDate(this.yesterday.getDate() - 1);
        this.fewDays.setDate(this.fewDays.getDate() - 4);
        this.weekago.setDate(this.weekago.getDate() - 7);
        this.manyDays.setDate(this.manyDays.getDate() - 17);
        this.manyMonths.setDate(this.manyMonths.getDate() - 45);
        this.manyYears.setDate(this.manyYears.getDate() - 366);
    }
}
