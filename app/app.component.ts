import {Component} from 'angular2/core';

@Component({       //decoorator or annotations
    selector: 'my-app',
    template:
    '<h1>My First Angular 2 App,Hello {{title}}</h1>' +
    '<span>Clicks:{{count}}</span>' +
    '<button (click)="increaseCount()" >Click me </button> '

})
export class AppComponent {
    count = 0;
    title = "My first angular app";

    increaseCount(){
        this.count++
    }

}