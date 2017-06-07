import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from '../Binder/EmployeeComponent';
import { GridComponent } from './GridComponent';
import { RandomComponent } from './RandomComponent';
import { DateComponent } from './DateComponent';

//const randomFactory = () => { return Math.random(); };

@NgModule(
    {
        imports: [BrowserModule, FormsModule],
        declarations: [EmployeeComponent, GridComponent, RandomComponent,DateComponent],
        providers: [
            { provide: 'Random', useValue: Math.random() },
        ],
        bootstrap: [EmployeeComponent]
    })
export class EmployeeModuleLibrary {
}