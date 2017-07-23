import { Component } from '@angular/core';

@Component(
    {
        selector: 'my-app',
        template: '<h1> Employee Application <h1>' +
        '<nav>' +
        '<a routerLink="/EmployeeList" routerLinkActive="active"> Employee List </a>' +
        '<a routerLink="/TaskList" routerLinkActive="active"> Task List </a>' +
        '</nav>' +
        '<router-outlet></router-outlet>'

    }
)
        
export class AppComponent { }