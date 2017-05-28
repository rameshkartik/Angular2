import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { EmployeeComponent } from './EmployeeComponent'
import { FormsModule } from '@angular/forms'
@NgModule(
    {
        imports: [BrowserModule, FormsModule],
        declarations: [EmployeeComponent],
        bootstrap: [EmployeeComponent]

    })
export class EmployeeModuleLibrary {
}
