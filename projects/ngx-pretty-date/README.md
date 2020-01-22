# Angular Pretty Date

Facebook, twitter like date conversion in Angular using angular pipes. Supports angular 8. 

Check out the [demo](http://https://keshavkhatri.github.io/angular8-with-ssr "demo")

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

#### Examples

|   Input |  Output |
| :------------: | :------------: |
| Date object  | just now  |
| Date object minus one minute  | 1 minute ago  |
| Date object minus 5 minute  | 5 minutes ago  |
| Date object minus 1 hour  | 1 hour ago   |
| Date object minus 5 hours  | 5 hours ago  |
| Date object minus 1 day  | Yesterday  |
| Date object minus 4 days | 4 days ago  |
| Date object minus 17 days  | 3 weeks ago  |
| Date object minus 45 days  | 2 months ago  |
| Date object minus 366 days  | more than a year ago  |
| 2019-12-24T06:18:44  | 5 weeks ago  |
| Text String   | Invalid Date  |


#### Running the demo app
    cd projectRoot
    npm install
    ng serve