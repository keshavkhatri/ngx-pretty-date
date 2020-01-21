import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'prettyDate' })
export class PrettyDate implements PipeTransform {
    transform(time: any): string {
        var date;

        if (time instanceof Date) {
            date = time;
        } else {
            date = new Date((time || "").replace(/-/g, "/").replace(/[T]/g, " "));
        }

        try{
            var diff = (((new Date()).getTime() - date.getTime()) / 1000);
            var day_diff = Math.floor(diff / 86400);
        } catch(e){
            return "Invalid Date";
        }

        if (isNaN(day_diff) || day_diff < 0)
            return "Invalid Date";

        return day_diff == 0 && (
            diff < 60 && "just now" ||
            diff < 120 && "1 minute ago" ||
            diff < 3600 && Math.floor(diff / 60) + " minutes ago" ||
            diff < 7200 && "1 hour ago" ||
            diff < 86400 && Math.floor(diff / 3600) + " hours ago") ||
            day_diff == 1 && "Yesterday" ||
            day_diff < 7 && day_diff + " days ago" ||
            day_diff == 7 && "1 week ago" ||
            day_diff < 31 && Math.ceil(day_diff / 7) + " weeks ago" ||
            day_diff < 365 && Math.ceil(day_diff / 30) + " months ago" ||
            day_diff >= 365 && " more than a year ago";
    }
}