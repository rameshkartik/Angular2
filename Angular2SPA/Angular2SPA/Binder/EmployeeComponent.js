"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Employee_1 = require("../Model/Employee");
var FactoryEmployee_1 = require("../Service/FactoryEmployee");
var EmployeeComponent = (function () {
    function EmployeeComponent(factoryEmpObject) {
        this.EmployeeCurrentObj = null;
        this._EmployeeType = "";
        this.Employees = new Array();
        this.factoryEmployeeObject = null;
        this.factoryEmployeeObject = factoryEmpObject;
        this.EmployeeCurrentObj = this.factoryEmployeeObject.Create(this._EmployeeType);
    }
    EmployeeComponent.prototype.OnEmployeeTypeChange = function (EmployeeType) {
        this._EmployeeType = EmployeeType;
        this.EmployeeCurrentObj = this.factoryEmployeeObject.Create(this._EmployeeType);
    };
    EmployeeComponent.prototype.Add = function () {
        this.Employees.push(this.EmployeeCurrentObj);
        this.Employees = this.Employees.slice();
        this.EmployeeCurrentObj = new Employee_1.Employee();
    };
    EmployeeComponent.prototype.Cancel = function () {
        this.EmployeeCurrentObj = new Employee_1.Employee();
    };
    EmployeeComponent.prototype.Update = function () {
        for (var _i = 0, _a = this.Employees; _i < _a.length; _i++) {
            var emp = _a[_i];
            if (emp.EmployeeCode == this.EmployeeCurrentObj.EmployeeCode) {
                emp.EmployeeName = this.EmployeeCurrentObj.EmployeeName;
                emp.City = this.EmployeeCurrentObj.City;
            }
        }
        this.EmployeeCurrentObj = new Employee_1.Employee();
    };
    EmployeeComponent.prototype.Select = function (empSelected) {
        this.EmployeeCurrentObj = this.factoryEmployeeObject.Create(this._EmployeeType);
        this.EmployeeCurrentObj.EmployeeCode = empSelected.EmployeeCode;
        this.EmployeeCurrentObj.EmployeeName = empSelected.EmployeeName;
        this.EmployeeCurrentObj.City = empSelected.City;
        this.EmployeeCurrentObj.EmployeeType = empSelected.EmployeeType;
        this._EmployeeType = empSelected.EmployeeType;
    };
    return EmployeeComponent;
}());
EmployeeComponent = __decorate([
    core_1.Component({
        providers: [FactoryEmployee_1.FactoryEmployee],
        templateUrl: "../UI/Employee.html"
    }),
    __metadata("design:paramtypes", [FactoryEmployee_1.FactoryEmployee])
], EmployeeComponent);
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=EmployeeComponent.js.map