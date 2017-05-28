import { Component } from '@angular/core'
import { Employee } from '../Model/Employee'

@Component(
    {
        selector: "Employee-ui",
        templateUrl:"Employee.html"
    })
export class EmployeeComponent {

    EmployeeObj: Employee = new Employee();
}