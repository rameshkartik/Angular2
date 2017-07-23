import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './EmployeeComponent';
import { GridComponent } from './GridComponent';
import { ContractEmployeeComponent } from './ContractEmployeeComponent';
import { MainPageComponent } from './MainPageComponent';
import { PermanentEmployeeComponent } from './PermanentEmployeeComponent';
import { RouterModule } from '@angular/router';
//import { ApplicationRoutes } from './Routing';


@NgModule(
    {
        imports: [
            RouterModule.forRoot([
                { path: 'Employee', component: EmployeeComponent },
                { path: 'PermanentEmployee', component: PermanentEmployeeComponent }
            ]),
            BrowserModule,
            FormsModule],
        declarations: [EmployeeComponent, GridComponent,
            ContractEmployeeComponent,
            PermanentEmployeeComponent,
            MainPageComponent],
        bootstrap: [MainPageComponent]
    })
export class ModuleLibrary {
}