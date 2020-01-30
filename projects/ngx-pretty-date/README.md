# Angular Pretty Date

Facebook, twitter like date conversion in Angular using angular pipes. Supports angular 8. 

Check out the [demo](https://keshavkhatri.github.io/ngx-pretty-date "demo")

#### Examples

|   Input |  Output |
| :------------: | :------------: |
| Current time  | just now  |
| Till 60 seconds  | 1 minute ago  |
| 2 to 59 minutes  | X minutes ago  |
| 60 minutes  | 1 hour ago   |
| 2 to 23 hours  | X hours ago  |
| 24 hours  | Yesterday  |
| 2 to 6 days | X days ago  |
| 7 days | 1 week ago  |
| 8 to 30 days | X weeks ago  |
| 30 days to 365 days | X months ago  |
| more than 365 days  | more than a year ago  |
| Date string 2019-12-24T06:18:44  | 5 weeks ago  |
| Text String  | Invalid Date  |

## Getting Started

#### Install via npm

> npm install --save ngx-pretty-date

#### Import the module
    import { NgxPrettyDateModule } from 'ngx-pretty-date';
    
    @NgModule({
      declarations: [
        ...
      ],
      imports: [
        ...
        NgxPrettyDateModule
      ],
      bootstrap: [...]
    })
    export class AppModule { }

#### Use in components
    <span> {{dateObj | prettyDate}} </span>

You can pass javascript date object or string like this '2019-12-24T06:18:44'

#### Options
You can pass date format with the pipe example below

    <span> {{dateObj | prettyDate:'dd/mm/yyyy'}} </span>
Valid formats are
- dd/mm/yyyy
- mm/dd/yyyy
- yyyy/dd/mm
- yyyy/mm/dd

#### Running the demo app
    cd projectRoot
    npm install
    ng serve