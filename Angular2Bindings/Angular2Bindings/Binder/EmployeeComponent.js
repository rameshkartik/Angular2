"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Employee_1 = require("../Model/Employee");
var EmployeeComponent = (function () {
    function EmployeeComponent() {
        this.EmployeeCurrentObj = new Employee_1.Employee();
        this.Employees = new Array();
    }
    EmployeeComponent.prototype.Add = function () {
        this.Employees.push(this.EmployeeCurrentObj);
        this.Employees = this.Employees.slice();
        alert(this.Employees.length);
        this.EmployeeCurrentObj = new Employee_1.Employee();
    };
    EmployeeComponent.prototype.Select = function (empSelected) {
        this.EmployeeCurrentObj = Object.assign({}, empSelected);
    };
    EmployeeComponent.prototype.Update = function () {
        for (var _i = 0, _a = this.Employees; _i < _a.length; _i++) {
            var emp = _a[_i];
            if (emp.EmployeeCode == this.EmployeeCurrentObj.EmployeeCode) {
                emp.EmployeeName = this.EmployeeCurrentObj.EmployeeName;
                emp.EmployeeSalary = this.EmployeeCurrentObj.EmployeeSalary;
            }
        }
        this.EmployeeCurrentObj = new Employee_1.Employee();
    };
    EmployeeComponent.prototype.Clear = function () {
        this.EmployeeCurrentObj = new Employee_1.Employee();
    };
    return EmployeeComponent;
}());
EmployeeComponent = __decorate([
    core_1.Component({
        selector: "Employee-ui",
        templateUrl: "Employee.html"
    })
], EmployeeComponent);
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=EmployeeComponent.js.map