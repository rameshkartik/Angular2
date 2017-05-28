import { Component } from "@angular/core"
import { Employee } from "../Model/Employee"
@Component(
    {
        selector: "Employee-ui",
        templateUrl: "Employee.html"
    })
export class EmployeeComponent {
    EmployeeCurrentObj: Employee = new Employee();

    Employees:Array < Employee > = new Array<Employee>();

    Add() {
        
        this.Employees.push(this.EmployeeCurrentObj);
        this.Employees = this.Employees.slice();
        alert(this.Employees.length);
        this.EmployeeCurrentObj = new Employee();
    }

    Select(empSelected:Employee) {
        this.EmployeeCurrentObj = Object.assign({}, empSelected);
    }

    Update() {
        for (let emp of this.Employees) {
            if (emp.EmployeeCode == this.EmployeeCurrentObj.EmployeeCode) {
                emp.EmployeeName = this.EmployeeCurrentObj.EmployeeName;
                emp.EmployeeSalary = this.EmployeeCurrentObj.EmployeeSalary;
            }
        }
        this.EmployeeCurrentObj = new Employee();
    }

    Clear() {
        this.EmployeeCurrentObj = new Employee();
    }
    
}
    