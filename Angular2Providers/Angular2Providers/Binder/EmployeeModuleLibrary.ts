import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from '../Binder/EmployeeComponent';
import { GridComponent } from './GridComponent';

@NgModule(
    {
        imports:[BrowserModule, FormsModule],
        declarations:[EmployeeComponent,GridComponent],
        bootstrap:[EmployeeComponent]
    })
export class EmployeeModuleLibrary {
}