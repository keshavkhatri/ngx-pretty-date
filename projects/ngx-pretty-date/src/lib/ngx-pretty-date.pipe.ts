import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'prettyDate' })
export class PrettyDate implements PipeTransform {
    transform(time: any, dateFormat: any): any {
        var date;

        if (time instanceof Date) {
            date = time;
        } else {
            var temp = (time || "").replace(/-/g, "/").replace(/[T]/g, " ").split(" ");
            var time = temp[1] ? temp[1] : '';
            var dateTemp = temp[0];
            if (dateFormat != undefined) {
                dateTemp = dateTemp.split('/');
                switch (dateFormat) {
                    case 'dd/mm/yyyy':
                        dateTemp = dateTemp[2] + '/' + dateTemp[1] + '/' + dateTemp[0] + ' ' + time;
                        break;
                    case 'mm/dd/yyyy':
                        dateTemp = dateTemp[2] + '/' + dateTemp[0] + '/' + dateTemp[1] + ' ' + time;
                        break;
                    case 'yyyy/mm/dd':
                        dateTemp = dateTemp[0] + '/' + dateTemp[1] + '/' + dateTemp[2] + ' ' + time;
                        break;
                    case 'yyyy/dd/mm':
                        dateTemp = dateTemp[0] + '/' + dateTemp[2] + '/' + dateTemp[1] + ' ' + time;
                        break;
                    default:
                        break;
                }
            }
            date = new Date(dateTemp);
        }

        try {
            var diff = (((new Date()).getTime() - date.getTime()) / 1000);
            var day_diff = Math.floor(diff / 86400);
        } catch (e) {
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