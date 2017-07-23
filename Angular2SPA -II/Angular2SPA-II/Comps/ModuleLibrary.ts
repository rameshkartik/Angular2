import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './AppComponent';
import { RoutingModule } from './Routing';

import { EmployeeListComponent } from './EmployeeListComponent';
import { TaskListComponent } from './TaskListComponent';
import { PageNotFoundComponent } from './PageNotFoundComponent';

@NgModule(
    {
        imports: [
            BrowserModule,
            FormsModule,
            RoutingModule,
        ],
        declarations: [
            AppComponent,
            EmployeeListComponent,
            TaskListComponent,
            PageNotFoundComponent
        ],
        bootstrap: [AppComponent]

    })
export class ModuleLibrary { }
