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
	
	
#### Running the demo app
    cd projectRoot
    npm install
    ng serve